import { IconServerError } from 'assets/icons';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';

export default function Error() {
  return (
    <Box>
      <IconServerError width={100} height={100} color="#ff6d8d" />
      <Head>Failed to load the data</Head>
      <Body>
        The Countries API server has encountered an issue, or it could be a mistake on the
        part of the site's developer. Would you like to try again?
      </Body>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-wrap: balance;
  gap: 1rem;
  padding: 6rem 0;
  border-radius: 1rem;
  background-color: ${props => props.theme.background.secondary};
  transition: background-color ${timer.default};
`;

const Head = styled.h1`
  line-height: 120%;

  @media screen and (max-width: ${size.tablet}) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: ${size.mobile}) {
    font-size: 2rem;
  }
`;

const Body = styled.p`
  width: 50%;
  text-align: center;

  @media screen and (max-width: ${size.tablet}) {
    width: 100%;
  }
`;
