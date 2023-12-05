import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NationMapCardProps {
  borderData: {
    icon: JSX.Element;
    key: string;
    data: (string | undefined)[] | undefined;
  };
}

export default function NationMapCard({ borderData }: NationMapCardProps) {
  return (
    <NationMapCardBox>
      <MapSubHeader>
        {borderData.icon}
        <SubHeader>{borderData.key}</SubHeader>
      </MapSubHeader>
      <MapHeader>
        {borderData.data?.map(border => (
          <Badge to={`/nation/${border}`}>{border}</Badge>
        ))}
      </MapHeader>
    </NationMapCardBox>
  );
}

const NationMapCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
`;

const MapSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: gray;
`;

const SubHeader = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

const MapHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const Badge = styled(Link)`
  display: inline-block;
  font-size: 0.9rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
`;
