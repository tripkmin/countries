import { useEffect, useState } from 'react';
import { ThemeT } from 'types/type';

export default function useTheme() {
  const localTheme = localStorage.getItem('countries_theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let themeMode: ThemeT = 'light';

  if (localTheme === 'light' || localTheme === 'dark') {
    themeMode = localTheme;
  } else if (prefersDarkMode) {
    themeMode = 'dark';
  }

  const [theme, setTheme] = useState<ThemeT>(themeMode);

  useEffect(() => {
    localStorage.setItem('countries_theme', theme);
  }, [theme]);

  const themeHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return { theme, themeHandler };
}
