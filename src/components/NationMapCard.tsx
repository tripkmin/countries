import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { timer } from 'styles/constants';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface NationMapCardProps {
  borderData: {
    icon: JSX.Element;
    key: string;
    data: (string | undefined)[] | undefined;
  };
  isLoading: boolean;
}

export default function NationMapCard({ borderData, isLoading }: NationMapCardProps) {
  return (
    <NationMapCardBox>
      <MapSubHeader>
        {borderData.icon}
        <SubHeader>{borderData.key}</SubHeader>
      </MapSubHeader>
      <MapHeader>
        {isLoading ? (
          <>
            <Skeleton width={140} height="1.6rem" />
            <Skeleton width={200} height="1.6rem" />
            <Skeleton width={100} height="1.6rem" />
          </>
        ) : borderData.data ? (
          borderData.data?.map(border => (
            <Badge key={border} to={`/nation/${border}`}>
              {border}
            </Badge>
          ))
        ) : (
          <p>There are no border countries</p>
        )}
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
  background-color: ${props => props.theme.background.secondary};
  transition: background-color ${timer.default};
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
`;

const MapSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.font.secondary};
  fill: ${props => props.theme.font.secondary};
  transition: color ${timer.default}, fill ${timer.default};
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
  line-height: 180%;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.button};
  transition: background-color ${timer.default}, color ${timer.default},
    transform ${timer.fast};
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${props => props.theme.background.buttonHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;
