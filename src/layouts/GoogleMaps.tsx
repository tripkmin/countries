import { Wrapper } from '@googlemaps/react-wrapper';
import styled from 'styled-components';
import { timer } from 'styles/constants';
import { LayoutProps } from 'types/type';

export const GoogleMapsWrapper = ({ children }: LayoutProps) => {
  const apiKey = process.env.temp;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  if (!apiKey) {
    return (
      <Warning>
        <strong>Cannot display the map</strong>
        <p>google maps api key missing</p>
      </Warning>
    );
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};

const Warning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  background-color: ${props => props.theme.background.secondary};
  line-height: 180%;
  text-align: center;
  border-radius: 10px;
  transition: background-color ${timer.default};
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);

  strong {
    font-weight: 700;
  }
`;
