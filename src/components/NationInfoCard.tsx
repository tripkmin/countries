import { IcoeName } from 'assets/icons';
import styled from 'styled-components';

// dummy
export default function NationInfoCard() {
  return (
    <NationInfoCardBox>
      <InfoSubHeader>
        <IcoeName color="gray" />
        <SubHeader>Native Name</SubHeader>
      </InfoSubHeader>
      <InfoHeader>Česká republika</InfoHeader>
    </NationInfoCardBox>
  );
}

const NationInfoCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
`;

const InfoSubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: gray;
`;

const SubHeader = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

const InfoHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
`;
