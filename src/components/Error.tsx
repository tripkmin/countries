import styled from 'styled-components';
import { size, timer } from 'styles/constants';

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
  text-align: center;
  text-wrap: balance;
  gap: 2rem;
  transition: background-color ${timer.default};
`;

const Head = styled.h1`
  line-height: 120%;
`;

const Body = styled.p`
  width: 60%;
  text-align: center;

  @media screen and (max-width: ${size.tablet}) {
    width: 100%;
    padding: 2rem 1.2rem;
  }
`;
