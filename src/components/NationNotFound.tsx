import { IconInfo } from 'assets/icons';
import QueryContext from 'contexts/QueryContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';

export default function NationNotFound() {
  const { debouncedValue, optionValue } = useContext(QueryContext);

  return (
    <NotFoundBox>
      <IconInfo />
      <p>
        The country named <strong>'{debouncedValue}'</strong> cannot be found on the
        <strong>'{optionValue}'</strong> continent.
      </p>
    </NotFoundBox>
  );
}

const NotFoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-wrap: balance;
  gap: 0.5rem;
  padding: 6rem 0;
  border-radius: 1rem;
  fill: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
  transition: fill ${timer.default}, background-color ${timer.default};

  strong {
    margin: 0 0.3rem;
  }

  @media screen and (max-width: ${size.tablet}) {
    flex-direction: column;
    padding: 6rem 2rem;
  }
`;
