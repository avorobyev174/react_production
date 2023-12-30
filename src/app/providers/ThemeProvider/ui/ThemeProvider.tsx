import { LOCAL_STORAGE_THEME_KEY, ETheme, ThemeContext } from '../lib/ThemeContext';
import { type FC, useMemo, useState } from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [ theme, setTheme ] = useState<ETheme>(defaultTheme)
  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [ theme ])
  return (
    <ThemeContext.Provider value={ defaultProps }>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
