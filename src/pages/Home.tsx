import { useQuery } from '@tanstack/react-query';
import { NationCardMemo } from 'components/NationCard';
import Main from 'layouts/Main';
import NationCardList from 'layouts/NationCardList';
import Header from 'layouts/Option';
import { ChangeEvent, useEffect, useState } from 'react';
import { NationT } from 'src/types/type';
import Search from 'components/common/Search';
import Select from 'components/common/Select';
import useDebounce from 'hooks/useDebounce';
import styled from 'styled-components';
import { size } from 'styles/constants';
import 'react-loading-skeleton/dist/skeleton.css';
import { IconInfo, IconReset } from 'assets/icons';
import LoadingSkeleton from 'components/LoadingSkeleton';
import { FlatButton } from 'components/common/Button';

export default function Home() {
  const { data = [], isLoading } = useQuery<NationT[]>({
    queryKey: ['wholeNation'],
    queryFn: async () => {
      try {
        const res = await fetch(' https://restcountries.com/v3.1/all');
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
        throw new Error();
      }
    },
  });

  const [filteredNation, setFilteredNation] = useState<NationT[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [optionValue, setOptionValue] = useState('All');
  // useDebounce 훅을 이용해 300ms 뒤에 debouncedValue에 value가 할당됨.
  const debouncedValue = useDebounce(searchValue, 300);
  const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const SLICE_SIZE = 24;
  const [sliceCount, setSliceCount] = useState(1);
  const sliceData = data.slice(0, SLICE_SIZE * sliceCount);

  // option, search 관련 시작
  useEffect(() => {
    const lowerCaseValue = debouncedValue.toLowerCase();

    const filterByValue = (items: NationT[]) =>
      items.filter(item => item.name.official.toLowerCase().includes(lowerCaseValue));

    const filterByRegion = (items: NationT[]) =>
      items.filter(item => item.region === optionValue);

    if (debouncedValue && optionValue === 'All') {
      setFilteredNation(filterByValue(data));
    } else if (debouncedValue && optionValue !== 'All') {
      const regionFiltered = filterByRegion(data);
      setFilteredNation(filterByValue(regionFiltered));
    } else if (!debouncedValue && optionValue !== 'All') {
      setFilteredNation(filterByRegion(data));
    } else {
      setFilteredNation([]);
    }
  }, [debouncedValue, optionValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
  };

  const optionResetHandler = () => {
    setSearchValue('');
    setOptionValue('All');
  };
  // option, search 관련 끝

  // 스크롤 이벤트 관련 시작
  const handleScroll = () => {
    // window.scrollY가 지원되지 않는 브라우저에서는 scrollTop을 이용해 scrollPosition 계산
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (
      scrollPosition >=
      document.documentElement.scrollHeight - window.innerHeight - 200
    ) {
      setSliceCount(prevCount => prevCount + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // 스크롤 이벤트 관련 끝

  // 조건부 렌더링 로직 시작
  const renderNationCards = () => {
    if (debouncedValue === '' && optionValue === 'All') {
      return sliceData.map(nation => (
        <NationCardMemo key={nation.cca3} nation={nation} />
      ));
    } else {
      return filteredNation.map(nation => (
        <NationCardMemo key={nation.cca3} nation={nation} />
      ));
    }
  };

  const NationNotFound = () => {
    return (
      <NotFoundBox>
        <IconInfo />
        <p>
          No Nations found for <strong>'{debouncedValue}'</strong>
        </p>
      </NotFoundBox>
    );
  };
  // 조건부 렌더링 로직 끝

  return (
    <Main>
      <Header>
        <Head>
          {debouncedValue !== ''
            ? `Filtered Nation (${filteredNation.length})`
            : 'All Nations'}
        </Head>
        <FilterBox>
          <Search value={searchValue} inputHandler={handleInputChange} />
          <Select
            value={optionValue}
            options={REGIONS}
            optionHandler={handleOptionChange}
          />
          <ResetButton onClick={optionResetHandler}>
            <IconReset />
          </ResetButton>
        </FilterBox>
      </Header>
      {debouncedValue !== '' && filteredNation.length === 0 ? (
        <NationNotFound />
      ) : (
        <NationCardList>
          {isLoading
            ? Array.from({ length: 12 }, (_, idx) => <LoadingSkeleton key={idx} />)
            : renderNationCards()}
        </NationCardList>
      )}
    </Main>
  );
}

const Head = styled.h1`
  font-size: 2.5rem;
  line-height: 120%;

  @media screen and (max-width: ${size.desktop}) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${size.tablet}) {
    font-size: 2.5rem;
  }
`;

const FilterBox = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 1;
`;

const ResetButton = styled(FlatButton)`
  flex-shrink: 0;
  width: 40px;
`;

const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 6rem 0;
  border-radius: 1rem;
  fill: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
`;
