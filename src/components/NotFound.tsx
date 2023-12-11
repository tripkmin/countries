import { IconNotFound } from 'assets/icons';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';

export default function NotFoundComponent() {
  return (
    <Box>
      <IconNotFound width={100} height={100} color="#ff6d8d" />
      <Head>404 NOT FOUND</Head>
      <Body>
        Your presence on this page implies a thorough exploration of my website. Thanks a
        bunch for your delightful wandering!
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

  @media screen and (max-width: ${size.tablet}) {
    padding: 6rem 2rem;
  }
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
