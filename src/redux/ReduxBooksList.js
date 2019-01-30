import React from 'react';
import { connect } from 'react-redux';
import { booksSelector } from './selectors';

const ReduxBooksList = ({ books }) => (
  <React.Fragment>
    {
      books.map(({ author, title }) => (
        <p key={title}>
          {title} by {author}
        </p>
      ))
    }
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  books: booksSelector(state),
});

export default connect(mapStateToProps)(ReduxBooksList);
