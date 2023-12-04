import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Nation from 'pages/Nation';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nation/:name" element={<Nation />} />
      </Routes>
    </>
  );
}

export default App;
