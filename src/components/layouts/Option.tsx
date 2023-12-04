import { LayoutProps } from 'src/types/type';
import styled from 'styled-components';

export default function Option({ children }: LayoutProps) {
  return <OptionBox>{children}</OptionBox>;
}

const OptionBox = styled.div``;
