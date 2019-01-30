import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
  query {
    books {
      author
      title
    }
  }
`;

const ApolloBooksList = () => (
  <Query query={BOOKS_QUERY}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <p>Loading</p>;
        }

        if (error) {
          return <p>Error: {error}</p>
        }

        return (
          <React.Fragment>
            {data.books.map(({ author, title }) => (
              <p key={title}>
                {title} by {author}
              </p>
            ))}
          </React.Fragment>
        )
      }
    }
  </Query>
);

export default ApolloBooksList;
