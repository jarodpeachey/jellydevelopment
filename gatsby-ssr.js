import React from 'react';
import { StylesProvider } from './src/providers/StylesProvider';
import { AppProvider } from './src/providers/AppProvider';
import 'typeface-nunito-sans';
import Layout from './src/components/layout/Layout';

export const wrapRootElement = ({ element }) => {
  console.log(element);

  return (
    <AppProvider>
      <StylesProvider>
        <Layout>{element}</Layout>
      </StylesProvider>
    </AppProvider>
  );
};
