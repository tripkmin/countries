import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';

interface NavbarProps {
  themeHandler: () => void;
}

export default function Navbar({ themeHandler }: NavbarProps) {
  return (
    <Header>
      <Logo to="/">Where in the world?</Logo>
      <button onClick={themeHandler}>button</button>
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
  border-bottom: 1px solid ${props => props.theme.border.primary};
  background-color: ${props => props.theme.background.primary};
  color: ${props => props.theme.font.primary};
  transition: background-color ${timer.default}, color ${timer.default};

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)``;
