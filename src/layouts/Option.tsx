import { LayoutProps } from 'src/types/type';
import styled from 'styled-components';
import { size } from 'styles/constants';

export default function Header({ children }: LayoutProps) {
  return <HeaderBox>{children}</HeaderBox>;
}

const HeaderBox = styled.div`
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${size.tablet}) {
    flex-direction: column;
  }
`;
