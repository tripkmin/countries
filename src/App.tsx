import GlobalStyles from 'styles/GlobalStyles';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Nation from 'pages/Nation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { themeMode } from 'styles/constants';
import useTheme from 'hooks/useTheme';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const queryClient = new QueryClient();

function App() {
  const { theme, themeHandler } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMode[theme]}>
        <GlobalStyles />
        <Navbar themeHandler={themeHandler} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nation/:name" element={<Nation />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
