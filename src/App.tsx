import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import styled from 'styled-components';
import { color, size, timer } from 'styles/constants';
import { IconCapital, IconPeople } from 'assets/icons';
import { useEffect, useState } from 'react';
import JSONdata from 'assets/data.json';
import { NationT } from './types/type';
import { formatter } from './utils/utils';

function App() {
  const [data, setData] = useState<NationT[]>([]);

  useEffect(() => {
    setData(JSONdata);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header>
        <p>Hello world</p>
        <button>button</button>
      </Header>
      <Main>
        <Option></Option>
        <CardList>
          {data.map(nation => (
            <Card>
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
          ))}
        </CardList>
      </Main>
    </>
  );
}

const Header = styled.header`
  margin: auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  height: 50px;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

const Main = styled.main``;

const Option = styled.div``;

const CardList = styled.div`
  margin: auto;
  width: 1100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  justify-items: center;
  grid-gap: 1rem;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: ${size.tablet}) {
    grid-template-columns: repeat(2, 260px);
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`;

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
export default App;
