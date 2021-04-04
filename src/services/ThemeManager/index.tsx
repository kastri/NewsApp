import React, {useContext, createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const DEFAULT_THEME = 'light';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light'); // true == light, false == dark

  const isDarkTheme = () => {
    return theme == 'dark';
  };

  const init = async () => {
    try {
      const userPreferedTheme =
        (await AsyncStorage.getItem('theme')) || 'light';

      setTheme(userPreferedTheme);
    } catch (error) {
      setTheme(DEFAULT_THEME);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const switchTheme = async () => {
    const userSelectedTheme = theme == 'light' ? 'dark' : 'light';

    try {
      setTheme(userSelectedTheme);
      await AsyncStorage.setItem('theme', userSelectedTheme);
    } catch (error) {}
  };

  return (
    <ThemeContext.Provider value={{theme, switchTheme, isDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
