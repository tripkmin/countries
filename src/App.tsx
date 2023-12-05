import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Nation from 'pages/Nation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nation/:name" element={<Nation />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
