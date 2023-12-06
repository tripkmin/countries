import { NationCardMemo } from 'components/NationCard';
import Main from 'layouts/Main';
import NationCardList from 'layouts/NationCardList';
import Option from 'layouts/Option';
import { ChangeEvent, useEffect, useState } from 'react';
import JSONdata from 'assets/data.json';
import { NationT } from 'src/types/type';
import Navbar from 'components/Navbar';
import Search from 'components/common/Search';
import Select from 'components/common/Select';
import Footer from 'components/Footer';
import useDebounce from 'hooks/useDebounce';

export default function Home() {
  const [nation, setNation] = useState<NationT[]>([]);
  const [filteredNation, setFilteredNation] = useState<NationT[]>([]);
  const [optionValue, setOptionValue] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  // useDebounce 훅을 이용해 300ms 뒤에 debouncedValue에 value가 할당됨.
  const debouncedValue = useDebounce(searchValue, 300);
  const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    setNation(JSONdata);
  }, []);

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

  return (
    <Main>
      <Option>
        <Search value={searchValue} inputHandler={handleInputChange} />
        <Select options={REGIONS} optionHandler={handleOptionChange} />
      </Option>
      <NationCardList>
        {debouncedValue === '' && optionValue === 'All'
          ? nation.map(nation => <NationCardMemo key={nation.cca3} nation={nation} />)
          : filteredNation.map(nation => (
              <NationCardMemo key={nation.cca3} nation={nation} />
            ))}
      </NationCardList>
    </Main>
  );
}
