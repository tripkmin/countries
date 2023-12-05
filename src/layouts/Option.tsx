import { LayoutProps } from 'src/types/type';
import styled from 'styled-components';
import { size } from 'styles/constants';

export default function Option({ children }: LayoutProps) {
  return <OptionBox>{children}</OptionBox>;
}

const OptionBox = styled.div`
  gap: 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${size.desktop}) {
    padding: 0 1rem;
  }
`;
