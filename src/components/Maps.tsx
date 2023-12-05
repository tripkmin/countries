import { useEffect, useRef } from 'react';

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
  }, [ref]);

  return <div ref={ref} style={{ width: '1000px', height: '700px' }} />;
};
