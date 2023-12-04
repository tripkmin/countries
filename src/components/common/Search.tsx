import { IconSearch } from 'assets/icons';
import styled from 'styled-components';

export default function Search() {
  return (
    <SearchBox>
      <IconSearch />
      <input type="text"></input>
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
