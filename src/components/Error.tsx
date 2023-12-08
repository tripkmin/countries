import styled from 'styled-components';
import { timer } from 'styles/constants';

export default function Error() {
  return (
    <Box>
      <Head>Failed to load the data</Head>
      <Body>
        The Countries API server has encountered an issue, or it could be a mistake on the
        part of the site's developer. Would you like to try again?
      </Body>
    </Box>
  );
}

const Box = styled.div`
  margin: 1rem 0;
  padding: 10rem 3rem;
  background-color: ${props => props.theme.background.secondary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: background-color ${timer.default};
`;

const Head = styled.h1`
  &::after {
    content: '';
    width: 50%;
    border-bottom: 1px solid ${props => props.theme.border.secondary};
    transition: border-bottom ${timer.default};
  }
`;

const Body = styled.p`
  width: 50%;
  text-align: center;
`;
