import { createSelector } from 'reselect';

// this is not really necessary here, of course, but just here to make reselect working in this simple case
const stateSelector = state => state;

export const booksSelector = createSelector(
  stateSelector,
  state => state.books || [],
);
