import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DEFAULT_ZOOM = 7;

interface GoogleMapsProps {
  latlng?: number[];
}

export const GoogleMaps = ({ latlng }: GoogleMapsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: { lat: latlng?.[0] || 32, lng: latlng?.[1] || 32 },
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref, latlng]);

  return <Map ref={ref} />;
};

const Map = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 15px;
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
`;
