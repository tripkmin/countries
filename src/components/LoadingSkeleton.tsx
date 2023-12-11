import styled from 'styled-components';
import { size, timer } from 'styles/constants';
import {
  FlagBox,
  NationDescription,
  NationDetail,
  NationFooter,
  NationMain,
} from './NationCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function LoadingSkeleton() {
  return (
    <>
      <CardSkeleton>
        <FlagBoxSkeleton>
          <Skeleton containerClassName="container" width="100%" height="100%"></Skeleton>
        </FlagBoxSkeleton>
        <DescriptionSkeleton>
          <NationMainSkeleton>
            <Skeleton width={100} height="1.5rem"></Skeleton>
            <Skeleton width={190} height="1.5rem"></Skeleton>
          </NationMainSkeleton>
          <NationFooterSkeleton>
            <NationDetailSkeleton>
              <Skeleton width={20} />
              <Skeleton width={50}></Skeleton>
            </NationDetailSkeleton>
            <NationDetailSkeleton>
              <Skeleton width={20} />
              <Skeleton width={80}></Skeleton>
            </NationDetailSkeleton>
          </NationFooterSkeleton>
        </DescriptionSkeleton>
      </CardSkeleton>
    </>
  );
}

export const ARRAY_12 = Array.from({ length: 12 }, (_, idx) => idx);

const CardSkeleton = styled.div`
  width: 240px;
  padding: 20px 15px 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;
  text-align: center;
  border-radius: 10px;
  color: ${props => props.theme.font.primary};
  background-color: ${props => props.theme.background.secondary};
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  transition: background-color ${timer.default}, color ${timer.default};

  &:hover {
    box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: ${size.mobile}) {
    width: 100%;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }
`;

const FlagBoxSkeleton = styled(FlagBox)`
  display: block;

  .container {
    line-height: 0;
  }
`;

const DescriptionSkeleton = styled(NationDescription)``;
const NationMainSkeleton = styled(NationMain)``;
const NationFooterSkeleton = styled(NationFooter)``;
const NationDetailSkeleton = styled(NationDetail)`
  gap: 0;

  @media screen and (max-width: ${size.mobile}) {
    gap: 0.5rem;
  }
`;
