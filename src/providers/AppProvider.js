// src/react-auth0-spa.js
import React, { useState, useContext, useEffect } from 'react';
import { isBrowser } from '../utils/isBrowser';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [test, setTest] = useState('Test');

  return (
    <AppContext.Provider
      value={{
        scrolled,
        setScrolled,
        test
        // userAccountInfo,
        // setUserAccountInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
