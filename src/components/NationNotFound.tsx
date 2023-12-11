import { IconInfo } from 'assets/icons';
import styled from 'styled-components';
import { timer } from 'styles/constants';

export default function NationNotFound({ debouncedValue }: { debouncedValue: string }) {
  return (
    <NotFoundBox>
      <IconInfo />
      <p>
        No Nations found for <strong>'{debouncedValue}'</strong>
      </p>
    </NotFoundBox>
  );
}

const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  padding: 6rem 0;
  border-radius: 1rem;
  fill: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
  transition: fill ${timer.default}, background-color ${timer.default};
`;
