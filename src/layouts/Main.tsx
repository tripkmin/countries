import { ReactNode } from 'react';
import styled from 'styled-components';
import { size } from 'styles/constants';

interface MainLayoutProps {
  children: ReactNode;
}

export default function Main({ children }: MainLayoutProps) {
  return <MainBox>{children}</MainBox>;
}

const MainBox = styled.main`
  width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
  }
`;
