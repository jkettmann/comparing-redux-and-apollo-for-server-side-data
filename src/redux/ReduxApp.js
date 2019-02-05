import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BooksList from './ReduxBooksList';

const ReduxApp = () => (
  <Provider store={store}>
    <BooksList />
  </Provider>
);

export default ReduxApp;
