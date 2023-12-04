import Main from 'layouts/Main';

import Navbar from 'components/Navbar';

import { useParams } from 'react-router-dom';

export default function Nation() {
  const { name } = useParams();
  return (
    <>
      <Navbar />
      <Main>
        <h1>Nation</h1>
        <p>{name}</p>
      </Main>
    </>
  );
}
