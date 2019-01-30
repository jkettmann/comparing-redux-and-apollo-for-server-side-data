import axios from 'axios';

export const loadBooks = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/books');
  const books = response.data;
  dispatch(setBooks(books));
}

export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books,
});
