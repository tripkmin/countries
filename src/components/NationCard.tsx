import { IconCapital, IconPeople } from 'assets/icons';
import { NationT } from 'src/types/type';
import { formatter } from './../utils/utils'; // 절대경로 에러 발생. 고쳐야 함!
import styled from 'styled-components';
import { size, timer } from 'styles/constants';
import { Link } from 'react-router-dom';
import { memo } from 'react';

interface NationCardProps {
  nation: NationT;
}

function NationCard({ nation }: NationCardProps) {
  return (
    <Card to={`/nation/${nation.name.official}`}>
      <FlagBox>
        <Flag src={nation.flags.svg} alt={nation.flags.alt}></Flag>
      </FlagBox>
      <NationDescription>
        <NationMain>
          <Region>{nation.region}</Region>
          <NationName>{nation.name.official}</NationName>
        </NationMain>
        <NationFooter>
          <NationDetail>
            <IconPeople />
            <Detail>{formatter(nation.population, 0)}</Detail>
          </NationDetail>
          <NationDetail>
            <IconCapital />
            <Detail>{nation.capital?.join('') || '-'}</Detail>
          </NationDetail>
        </NationFooter>
      </NationDescription>
    </Card>
  );
}

const Card = styled(Link)`
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
  transition: all ${timer.default};

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

const FlagBox = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  height: 140px;
  background-color: ${props => props.theme.background.tertiary};
  transition: background-color ${timer.default};
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: ${size.mobile}) {
    width: 150px;
    height: 100px;
  }
`;

const Flag = styled.img`
  width: 100%;
`;

const NationDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-grow: 1;
  justify-content: space-evenly;

  & > :first-child::after {
    content: '';
    width: 100%;
    border: 1px solid ${props => props.theme.border.primary};
    transition: border ${timer.default};
    display: block;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: ${size.mobile}) {
    gap: 0.5rem;
    max-width: 60%;

    & > :first-child::after {
      display: none;
    }
  }
`;

const NationMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: ${size.mobile}) {
    gap: 0.25rem;
  }
`;

const Region = styled.h2`
  font-weight: 300;
  font-size: 1em;
  color: ${props => props.theme.font.secondary};
  letter-spacing: 0.25rem;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 0.9rem;
  }
`;

const NationName = styled.h1`
  font-size: 1.2rem;
  line-height: 150%;
  text-wrap: balance;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 1.1rem;
  }
`;

const NationFooter = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${size.mobile}) {
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

const NationDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  fill: ${props => props.theme.font.secondary};
  transition: fill ${timer.default};
  @media screen and (max-width: ${size.mobile}) {
    flex-direction: row;
  }
`;

const Detail = styled.div`
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: ${size.mobile}) {
    max-width: 150px;
  }
`;

export const NationCardMemo = memo(NationCard);
