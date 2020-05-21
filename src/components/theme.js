/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  shadow: {
    one: '0 1px 4px 0 rgba(76, 82, 103, 0.1)',
    two: '0 3px 10px 0 rgba(76, 82, 103, 0.15)',
  },
  radius: {
    one: '4px',
    two: '6.5px',
    three: '10.5px',
    four: '17px',
    five: '27.5px',
    six: '45px',
    seven: '73px',
  },
  spacing: {
    one: 4,
    two: 6.5,
    three: 10.5,
    four: 17,
    five: 27.5,
    six: 45,
    seven: 73,
  },
  color: {
    success: '#00ab66',
    error: '#ff6347',
    text: {
      paragraph: '#4c5267',
      heading: '#2c2f3b',
      dark: '#0e1e24',
    },
    primary: {
      // light: '#fab86c',
      main: '#b4267c',
      // dark: '#f76b2b',
    },
    secondary: {
      // light: '#fab86c',
      main: '#632695',
      // dark: '#f76b2b',
    },
    gray: {
      one: '#F7F7F7',
      two: '#F1F1F1',
      three: '#EBEBEB',
      four: '#DADBDB',
      five: '#C8CACB',
      six: '#ABAEB0',
      seven: '#929699',
      eight: '#787D81',
      nine: '#464C52',
      ten: '#131B23',
    },
  },
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
