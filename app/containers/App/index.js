/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Viewer from 'containers/Viewer/Loadable';

import AppWrapper from './AppWrapper';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={Viewer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
