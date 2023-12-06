import { useQuery } from '@tanstack/react-query';
import {
  NationCardMemo,
  NationDescription,
  NationFooter,
  NationMain,
  NationDetail,
  FlagBox,
} from 'components/NationCard';
import Main from 'layouts/Main';
import NationCardList from 'layouts/NationCardList';
import Option from 'layouts/Option';
import { ChangeEvent, useEffect, useState } from 'react';
import { NationT } from 'src/types/type';
import Search from 'components/common/Search';
import Select from 'components/common/Select';
import useDebounce from 'hooks/useDebounce';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Home() {
  const { data: nation = [], isLoading } = useQuery<NationT[]>({
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
  const [optionValue, setOptionValue] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  // useDebounce 훅을 이용해 300ms 뒤에 debouncedValue에 value가 할당됨.
  const debouncedValue = useDebounce(searchValue, 300);
  const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    const lowerCaseValue = debouncedValue.toLowerCase();

    const filterByValue = (items: NationT[]) =>
      items.filter(item => item.name.official.toLowerCase().includes(lowerCaseValue));

    const filterByRegion = (items: NationT[]) =>
      items.filter(item => item.region === optionValue);

    if (debouncedValue && optionValue === 'All') {
      setFilteredNation(filterByValue(nation));
    } else if (debouncedValue && optionValue !== 'All') {
      const regionFiltered = filterByRegion(nation);
      setFilteredNation(filterByValue(regionFiltered));
    } else if (!debouncedValue && optionValue !== 'All') {
      setFilteredNation(filterByRegion(nation));
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

  const RenderNation = () => {
    return (
      <>
        {debouncedValue === '' && optionValue === 'All'
          ? nation.map(nation => <NationCardMemo key={nation.cca3} nation={nation} />)
          : filteredNation.map(nation => (
              <NationCardMemo key={nation.cca3} nation={nation} />
            ))}
      </>
    );
  };

  const LoadingSkeleton = () => {
    return (
      <>
        <CardSkeleton>
          <FlagBoxSkeleton>
            <Skeleton
              containerClassName="container"
              width="100%"
              height="100%"></Skeleton>
          </FlagBoxSkeleton>
          <DescriptionSkeleton>
            <NationMainSkeleton>
              <Skeleton width={100} height="1.5rem"></Skeleton>
              <Skeleton width={190} height="1.5rem"></Skeleton>
            </NationMainSkeleton>
            <NationFooterSkeleton>
              <NationDetailSkeleton>
                <Skeleton width={20} />
                <Skeleton width={50}></Skeleton>
              </NationDetailSkeleton>
              <NationDetailSkeleton>
                <Skeleton width={20} />
                <Skeleton width={80}></Skeleton>
              </NationDetailSkeleton>
            </NationFooterSkeleton>
          </DescriptionSkeleton>
        </CardSkeleton>
      </>
    );
  };

  return (
    <Main>
      <Option>
        <Search value={searchValue} inputHandler={handleInputChange} />
        <Select options={REGIONS} optionHandler={handleOptionChange} />
      </Option>
      <NationCardList>
        {isLoading ? (
          Array.from({ length: 12 }, _ => {
            return <LoadingSkeleton />;
          })
        ) : (
          <RenderNation />
        )}
      </NationCardList>
    </Main>
  );
}

const CardSkeleton = styled.div`
  width: 240px;
  padding: 20px 15px 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;
  text-align: center;
  border-radius: 10px;
  color: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  transition: background-color ${timer.default}, color ${timer.default};

  &:hover {
    box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }
`;

const FlagBoxSkeleton = styled(FlagBox)`
  display: block;

  .container {
    line-height: 0;
  }
`;

const DescriptionSkeleton = styled(NationDescription)``;
const NationMainSkeleton = styled(NationMain)``;
const NationFooterSkeleton = styled(NationFooter)``;
const NationDetailSkeleton = styled(NationDetail)`
  gap: 0;
`;
