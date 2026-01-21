import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import {useColorScheme} from 'react-native';
import {colors} from '../constant/color';

//Define theme colors
interface Theme {
  background: string;
  text: string;
  primary: string;
  section: string;
  placeholder: string;
  modelColor: string;
  isDark: boolean;
  isLight: boolean;
}

//Define light theme colors
const lightTheme: Theme = {
  background: colors.white,
  text: '#000000',
  primary: colors.primary,
  section: '#5B5A5A',
  placeholder: colors.placeholder,
  modelColor: 'rgba(0,0,0,0.4)',
  isDark: false,
  isLight: true,
};

//Define dark theme colors
const darkTheme: Theme = {
  background: colors.primary,
  text: colors.white,
  primary: colors.primary,
  section: '#5B5A5A',
  placeholder: colors.placeholder,
  modelColor: 'rgba(256,256,256,0.4)',
  isDark: true,
  isLight: false,
};

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    // systemTheme === 'dark' ? darkTheme : lightTheme
    lightTheme,
  );

  useEffect(() => {
    // setTheme(systemTheme === 'dark' ? darkTheme : lightTheme);
    setTheme(lightTheme);
  }, [systemTheme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColor = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeColor must be used within a ThemeProvider');
  }
  return context.theme;
};
