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
import { SkeletonTheme } from 'react-loading-skeleton';
import NotFound from 'pages/NotFound';
import { QueryContextProvider } from './contexts/QueryContext';

const queryClient = new QueryClient();

function App() {
  const { theme, themeHandler } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <QueryContextProvider>
        <ThemeProvider theme={themeMode[theme]}>
          <SkeletonTheme
            baseColor={themeMode[theme].skeleton.baseColor}
            highlightColor={themeMode[theme].skeleton.highlightColor}
          >
            <GlobalStyles />
            <Navbar theme={theme} themeHandler={themeHandler} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nation/:name" element={<Nation />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </SkeletonTheme>
        </ThemeProvider>
      </QueryContextProvider>
    </QueryClientProvider>
  );
}

export default App;
