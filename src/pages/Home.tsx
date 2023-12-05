import NationCard from 'components/NationCard';
import Main from 'layouts/Main';
import NationCardList from 'layouts/NationCardList';
import Option from 'layouts/Option';
import { useEffect, useState } from 'react';
import JSONdata from 'assets/data.json';
import { NationT } from 'src/types/type';
import Navbar from 'components/Navbar';
import Search from 'components/common/Search';
import Select from 'components/common/Select';
import Footer from 'components/Footer';

export default function Home() {
  const [data, setData] = useState<NationT[]>([]);

  useEffect(() => {
    setData(JSONdata);
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <Option>
          <Search />
          <Select options={['a', 'b', 'c']} />
        </Option>
        <NationCardList>
          {data.map(nation => (
            <NationCard nation={nation} />
          ))}
        </NationCardList>
      </Main>
      <Footer></Footer>
    </>
  );
}
