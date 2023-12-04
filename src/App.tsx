import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import styled from 'styled-components';
import { size } from 'styles/constants';
import { useEffect, useState } from 'react';
import JSONdata from 'assets/data.json';
import { NationT } from './types/type';
import NationCard from 'components/NationCard';

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
            <NationCard nation={nation} />
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
    padding: 0 1rem;
  }

  @media screen and (max-width: ${size.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;

export default App;
