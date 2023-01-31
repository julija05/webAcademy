import React, { Fragment } from 'react';
import GlobalStyle from '../components/theme/globalStyle';
import { NavigationBar } from 'components';
import { HomePage } from 'components';

function App() {
  return (
    <Fragment>
    <GlobalStyle />
    <NavigationBar  />
    <HomePage/>
  </Fragment>
  );
}

export default App;