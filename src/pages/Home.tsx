import { useQuery } from '@tanstack/react-query';
import { NationCardMemo } from 'components/NationCard';
import Main from 'layouts/Main';
import NationCardList from 'layouts/NationCardList';
import Header from 'layouts/Option';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { NationT } from 'src/types/type';
import Search from 'components/common/Search';
import Select from 'components/common/Select';
import styled from 'styled-components';
import { size } from 'styles/constants';
import 'react-loading-skeleton/dist/skeleton.css';
import { IconReset } from 'assets/icons';
import LoadingSkeleton from 'components/LoadingSkeleton';
import { FlatButton } from 'components/common/Button';
import Error from 'components/Error';
import NationNotFound from 'components/NationNotFound';
import QueryContext from 'contexts/QueryContext';

export default function Home() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<NationT[]>({
    queryKey: ['wholeNation'],
    queryFn: async () => {
      try {
        const res = await fetch(' https://restcountries.com/v3.1/all');
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const {
    searchValue,
    optionValue,
    sliceCount,
    setSearchValue,
    setOptionValue,
    setSliceCount,
    debouncedValue,
    initializeQueries,
  } = useContext(QueryContext);

  const [filteredNation, setFilteredNation] = useState<NationT[]>([]);

  // useDebounce 훅을 이용해 300ms 뒤에 debouncedValue에 value가 할당됨.
  const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const SLICE_SIZE = 24;
  const sliceData = data.slice(0, SLICE_SIZE * sliceCount);
  const sliceFilteredData = filteredNation.slice(0, SLICE_SIZE * sliceCount);

  // option, search 관련 시작
  useEffect(() => {
    const lowerCaseValue = debouncedValue.toLowerCase();

    const filterByValue = (items: NationT[]) =>
      items.filter(
        item =>
          item.name.official.toLowerCase().includes(lowerCaseValue) ||
          item.name.common.toLowerCase().includes(lowerCaseValue)
      );

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
    setSliceCount(1);
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(e.target.value);
    setSliceCount(1);
  };
  // option, search 관련 끝

  // 스크롤 이벤트 관련 시작
  const handleScroll = () => {
    // window.scrollY가 지원되지 않는 브라우저에서는 scrollTop을 이용해 scrollPosition 계산
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const is150pxLeft =
      scrollPosition >= document.documentElement.scrollHeight - window.innerHeight - 150;

    if (
      // 검색과 옵션 선택없이 스크롤할 때 sliceCount가 올라가는 로직
      is150pxLeft &&
      !debouncedValue &&
      optionValue === 'All' &&
      data.length > sliceData.length
    ) {
      setSliceCount(prevCount => prevCount + 1);
    } else if (
      // 검색어를 입력하거나 옵션을 선택했을 때 sliceCount가 올라가는 로직
      is150pxLeft &&
      (debouncedValue || optionValue !== 'All') &&
      filteredNation.length > sliceFilteredData.length
    ) {
      setSliceCount(prevCount => prevCount + 1);
    }
    // 이렇게 안하고 단순히 150px이 남았을 때 sliceCount가 올라가게 되면
    // 하단으로부터 150px이 남았을 때 sliceCount가 올라가면서
    // 불필요한 재렌더링이 되기 때문에 이와 같은 로직을 사용함.
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data, sliceData, filteredNation, sliceFilteredData]);
  // 스크롤 이벤트 관련 끝

  // 조건부 렌더링 로직
  const renderNationCards = () => {
    if (debouncedValue === '' && optionValue === 'All') {
      return sliceData.map(nation => (
        <NationCardMemo key={nation.cca3} nation={nation} />
      ));
    } else {
      return sliceFilteredData.map(nation => (
        <NationCardMemo key={nation.cca3} nation={nation} />
      ));
    }
  };

  return (
    <Main>
      <Header>
        <Head>
          {debouncedValue !== ''
            ? `Filtered Nation${filteredNation.length > 1 ? 's' : ''} (${
                filteredNation.length
              })`
            : 'All Nations'}
        </Head>
        <FilterBox>
          <Search value={searchValue} inputHandler={handleInputChange} />
          <Select
            value={optionValue}
            options={REGIONS}
            optionHandler={handleOptionChange}
          />
          <ResetButton onClick={initializeQueries}>
            <IconReset />
          </ResetButton>
        </FilterBox>
      </Header>
      {isError ? (
        <Error />
      ) : (
        <>
          {debouncedValue !== '' && filteredNation.length === 0 ? (
            <NationNotFound />
          ) : (
            <NationCardList>
              {isLoading
                ? Array.from({ length: 12 }, (_, idx) => <LoadingSkeleton key={idx} />)
                : renderNationCards()}
            </NationCardList>
          )}
        </>
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
