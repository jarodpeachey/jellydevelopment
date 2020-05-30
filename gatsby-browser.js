import React from 'react';
import { StylesProvider } from './src/providers/StylesProvider';
import { AppProvider } from './src/providers/AppProvider';
import 'typeface-roboto-mono';

export const wrapRootElement = ({ element }) => {
  console.log(element);

  return (
    <AppProvider>
      <StylesProvider>{element}</StylesProvider>
    </AppProvider>
  );
};
