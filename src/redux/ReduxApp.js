import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReduxBooksList from './ReduxBooksList';

const ReduxApp = () => (
  <Provider store={store}>
    <ReduxBooksList />
  </Provider>
);

export default ReduxApp;
