import { Wrapper } from '@googlemaps/react-wrapper';
import { IconServerError } from 'assets/icons';
import styled from 'styled-components';
import { size, timer } from 'styles/constants';
import { LayoutProps } from 'types/type';

export const GoogleMapsWrapper = ({ children }: LayoutProps) => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEYS;

  if (!apiKey) {
    return (
      <Warning>
        <IconServerError width={100} height={100} color="#ff6d8d" />
        <Head>Cannot display the map</Head>
        <Body>
          It seems like the developer may have entered the Google API key incorrectly or
          exceeded the daily quota for the Google Maps API. This is a precautionary
          measure to protect the assets of the poor developer. Your understanding is
          appreciated.
        </Body>
      </Warning>
    );
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-wrap: balance;
  gap: 1rem;
  padding: 6rem 0;
  border-radius: 1rem;
  fill: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
  transition: fill ${timer.default}, background-color ${timer.default};

  @media screen and (max-width: ${size.tablet}) {
    flex-direction: column;
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
