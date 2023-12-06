import styled from 'styled-components';
import { timer } from 'styles/constants';

interface NationInfoCardProps {
  nation: {
    icon: JSX.Element;
    key: string;
    data: string | (string | undefined)[] | undefined;
  };
}

export default function NationInfoCard({ nation }: NationInfoCardProps) {
  return (
    <NationInfoCardBox>
      <InfoSubHeader>
        {nation.icon}
        <SubHeader>{nation.key}</SubHeader>
      </InfoSubHeader>
      <InfoHeader>{nation.data}</InfoHeader>
    </NationInfoCardBox>
  );
}

const NationInfoCardBox = styled.div`
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

const InfoSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.font.secondary};
  fill: ${props => props.theme.font.secondary};
  transition: all ${timer.default};
`;

const SubHeader = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

const InfoHeader = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 150%;
`;
