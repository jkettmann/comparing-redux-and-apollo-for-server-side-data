import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BooksList from './ApolloBooksList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <BooksList />
  </ApolloProvider>
);

export default ApolloApp;
