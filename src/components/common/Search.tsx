import { IconSearch } from 'assets/icons';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { timer } from 'styles/constants';

interface SearchProps {
  value: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ value, inputHandler: onChange }: SearchProps) {
  return (
    <SearchBox
      onSubmit={e => {
        e.preventDefault();
      }}>
      <IconSearch />
      <input type="text" value={value} onChange={onChange}></input>
    </SearchBox>
  );
}

const SearchBox = styled.form`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.background.secondary};
  fill: ${props => props.theme.font.secondary};
  color: ${props => props.theme.font.primary};
  transition: background-color ${timer.default}, color ${timer.default},
    fill ${timer.default};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    flex-grow: 1;
    background-color: inherit;
    color: inherit;
  }
`;
