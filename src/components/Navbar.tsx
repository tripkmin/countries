import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';
import { FlatButton } from './common/Button';
import { IconDark, IconLight } from 'assets/icons';
import { ThemeT } from 'types/type';

interface NavbarProps {
  theme: ThemeT;
  themeHandler: () => void;
}

export default function Navbar({ theme, themeHandler }: NavbarProps) {
  return (
    <Header>
      <Logo href="/">Where in the world?</Logo>
      <ThemeButton onClick={themeHandler}>
        {theme === 'light' ? <IconLight color="#ffa41b" /> : <IconDark color="#83d8f7" />}
      </ThemeButton>
    </Header>
  );
}

const Header = styled.header`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 70px;
  color: ${props => props.theme.font.primary};
  transition: color ${timer.default};

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ThemeButton = styled(FlatButton)`
  width: 40px;
  height: 40px;
  fill: ${props => props.theme.font.primary};
`;
