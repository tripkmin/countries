import { IconCapital, IconPeople } from 'assets/icons';
import { NationT } from 'src/types/type';
import { formatter } from './../utils/utils'; // 절대경로 에러 발생. 고쳐야 함!
import styled from 'styled-components';
import { color, size, timer } from 'styles/constants';
import { Link } from 'react-router-dom';

interface NationCardProps {
  nation: NationT;
}

export default function NationCard({ nation }: NationCardProps) {
  return (
    <Card to={`/nation/${nation.name}`}>
      <FlagBox>
        <Flag src={nation.flags.svg} alt={`${nation.name} flag`}></Flag>
      </FlagBox>
      <NationDescription>
        <NationMain>
          <Region>{nation.region}</Region>
          <NationName>{nation.name}</NationName>
        </NationMain>
        <NationFooter>
          <NationDetail>
            <IconPeople />
            <Detail>{formatter(nation.population, 0)}</Detail>
          </NationDetail>
          <NationDetail>
            <IconCapital />
            <Detail>{nation.capital || '-'}</Detail>
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
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.05);
  transition: box-shadow ${timer.default};

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
  width: 210px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: ${size.mobile}) {
    max-width: 150px;
    max-height: 100px;
  }
`;

const Flag = styled.img`
  width: 100%;
  height: 100%;
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
    border: 1px solid #eee;
    display: block;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: ${size.mobile}) {
    gap: 0.5rem;

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
  color: ${color.lightGray};
  letter-spacing: 0.25rem;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 0.9rem;
  }
`;

const NationName = styled.h1`
  font-size: 1.4rem;
  line-height: 150%;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 1.2rem;
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

/* 

import { IconCapital, IconPeople } from 'assets/icons';
import { NationT } from 'src/types/type';
import { formatter } from './../utils/utils'; // 절대경로 에러 발생. 고쳐야 함!
import styled from 'styled-components';
import { color, size, timer } from 'styles/constants';
import { useNavigate } from 'react-router-dom';

interface NationCardProps {
  nation: NationT;
}

export default function NationCard({ nation }: NationCardProps) {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/nation/${nation.name}`);
  };

  return (
    <Card onClick={navigateHandler}>
      <FlagBox>
        <Flag src={nation.flags.svg}></Flag>
      </FlagBox>
      <NationDescription>
        <NationMain>
          <Region>{nation.region}</Region>
          <NationName>{nation.name}</NationName>
        </NationMain>
        <NationFooter>
          <NationDetail>
            <IconPeople />
            <Detail>{formatter(nation.population, 0)}</Detail>
          </NationDetail>
          <NationDetail>
            <IconCapital />
            <Detail>{nation.capital || '-'}</Detail>
          </NationDetail>
        </NationFooter>
      </NationDescription>
    </Card>
  );
}

const Card = styled.div`
  width: 240px;
  padding: 20px 15px 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow ${timer.default};

  &:hover {
    box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.2);
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
  width: 210px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: ${size.mobile}) {
    max-width: 150px;
    max-height: 100px;
  }
`;

const Flag = styled.img`
  width: 100%;
  height: 100%;
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
    border: 1px solid #eee;
    display: block;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: ${size.mobile}) {
    gap: 0.5rem;

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
  color: ${color.lightGray};
  letter-spacing: 0.25rem;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 0.9rem;
  }
`;

const NationName = styled.h1`
  font-size: 1.4rem;
  line-height: 150%;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 1.2rem;
  }
`;

const NationFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.2rem;

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

  @media screen and (max-width: ${size.mobile}) {
    flex-direction: row;
  }
`;

const Detail = styled.div`
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: ${size.mobile}) {
    max-width: 150px;
  }
`;

*/
