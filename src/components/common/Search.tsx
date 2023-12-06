import { IconSearch } from 'assets/icons';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SearchProps {
  value: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ value, inputHandler: onChange }: SearchProps) {
  return (
    <SearchBox>
      <IconSearch />
      <input type="text" value={value} onChange={onChange}></input>
    </SearchBox>
  );
}

const SearchBox = styled.form`
  width: 300px;
  padding: 1rem;
  border: 1px solid #aaa;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
