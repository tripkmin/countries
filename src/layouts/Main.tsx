import { ReactNode } from 'react';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';

interface MainLayoutProps {
  children: ReactNode;
}

export default function Main({ children }: MainLayoutProps) {
  return <MainBox>{children}</MainBox>;
}

const MainBox = styled.main`
  width: 1100px;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.primary};
  transition: all ${timer.default};

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    padding: 3rem 1.2rem;
  }
`;
