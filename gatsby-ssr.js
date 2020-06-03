import React from 'react';
import { StylesProvider } from './src/providers/StylesProvider';
import { AppProvider } from './src/providers/AppProvider';
import 'typeface-nunito-sans';
import Layout from './src/components/layout/Layout';

export const wrapRootElement = ({ element }) => {
  console.log(element);

  return (
    <AppProvider>
      <StylesProvider>{element}</StylesProvider>
    </AppProvider>
  );
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
