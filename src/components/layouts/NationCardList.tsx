import { LayoutProps } from 'src/types/type';
import styled from 'styled-components';
import { size } from 'styles/constants';

export default function NationCardList({ children }: LayoutProps) {
  return <CardList>{children}</CardList>;
}

const CardList = styled.div`
  margin: auto;
  width: 1100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
  grid-gap: 1rem;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2, 260px);
    padding: 0 1rem;
  }

  @media screen and (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;
