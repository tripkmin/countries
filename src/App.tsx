import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import styled from 'styled-components';
import { color, size, timer } from 'styles/constants';
import { IconCapital, IconPeople } from 'assets/icons';
import { useEffect, useState } from 'react';
import JSONdata from 'assets/data.json';
import { NationT } from './types/type';

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
              <NationMain>
                <Region>{nation.region}</Region>
                <NationName>{nation.name}</NationName>
              </NationMain>
              <NationFooter>
                <NationDetail>
                  <IconPeople />
                  <Detail>{nation.population}</Detail>
                </NationDetail>
                <NationDetail>
                  <IconCapital />
                  <Detail>{nation.capital}</Detail>
                </NationDetail>
              </NationFooter>
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
  grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
  justify-items: center;
  grid-gap: 1rem;

  @media screen and (max-width: ${size.desktop}) {
    margin: auto;
    width: 100%;
    margin: 0;
    /* padding: 0 7rem; */
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  width: 240px;
  padding: 25px 15px;
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
`;

const FlagBox = styled.div`
  width: 210px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
`;

const Flag = styled.img`
  width: 100%;
  height: 100%;
`;

const NationMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${color.veryLightGray};
`;

const Region = styled.h2`
  font-weight: 300;
  font-size: 1em;
  color: ${color.lightGray};
  letter-spacing: 0.25rem;
`;

const NationName = styled.h1`
  font-size: 1.4rem;
`;

const NationFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  padding: 1.5rem 0 1rem 0;
`;

const NationDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Detail = styled.div``;
export default App;

/* 
여기서 grid의 width가 4개를 수용할 수 있는 범위를 넘을 경우 3개로 줄고, 3개를 수용할 수 있는 범위를 넘을 경우 2개로 줄일 수 있는 방법은?
*/
