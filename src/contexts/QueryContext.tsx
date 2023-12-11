import useDebounce from 'hooks/useDebounce';
import { ChangeEvent, Dispatch, SetStateAction, createContext, useState } from 'react';
import { LayoutProps } from 'types/type';

const QueryContext = createContext<{
  searchValue: string;
  optionValue: string;
  sliceCount: number;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setOptionValue: Dispatch<SetStateAction<string>>;
  setSliceCount: Dispatch<SetStateAction<number>>;
  debouncedValue: string;
  initializeQueries: () => void;
}>({
  searchValue: '',
  optionValue: '',
  sliceCount: 0,
  setSearchValue: () => {},
  setOptionValue: () => {},
  setSliceCount: () => {},
  debouncedValue: '',
  initializeQueries: () => {},
});

export const QueryContextProvider = ({ children }: LayoutProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [optionValue, setOptionValue] = useState('All');
  const [sliceCount, setSliceCount] = useState(1);

  const { debouncedValue, initializeDebouncedValue } = useDebounce(searchValue, 300);

  const initializeQueries = () => {
    setSearchValue('');
    setOptionValue('All');
    setSliceCount(1);
    initializeDebouncedValue();
  };

  return (
    <QueryContext.Provider
      value={{
        searchValue,
        optionValue,
        sliceCount,
        setSearchValue,
        setOptionValue,
        setSliceCount,
        debouncedValue,
        initializeQueries,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContext;
