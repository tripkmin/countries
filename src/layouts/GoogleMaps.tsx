import { Wrapper } from '@googlemaps/react-wrapper';
import { LayoutProps } from 'types/type';

export const GoogleMapsWrapper = ({ children }: LayoutProps) => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};
