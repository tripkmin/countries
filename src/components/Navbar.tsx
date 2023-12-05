import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { size } from 'styles/constants';

export default function Navbar() {
  return (
    <Header>
      <Logo to="/">Where in the world?</Logo>
      <button>button</button>
    </Header>
  );
}

const Header = styled.header`
  margin: auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 50px;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)``;
