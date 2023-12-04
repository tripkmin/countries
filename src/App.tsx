import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import JSONdata from 'assets/data.json';
import { NationT } from './types/type';
import NationCard from 'components/NationCard';
import Main from 'components/layouts/Main';
import NationCardList from 'components/layouts/NationCardList';
import Option from 'components/layouts/Option';

function App() {
  const [data, setData] = useState<NationT[]>([]);

  useEffect(() => {
    setData(JSONdata);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Option></Option>
        <NationCardList>
          {data.map(nation => (
            <NationCard nation={nation} />
          ))}
        </NationCardList>
      </Main>
    </>
  );
}

export default App;
