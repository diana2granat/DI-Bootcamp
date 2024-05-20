// "src/selectors.js"
import { createSelector } from '@reduxjs/toolkit';

const selectBooks = (state) => state.books.books;

const selectBooksByGenre = (genre) =>
  createSelector([selectBooks], (books) => books.filter((book) => book.genre === genre));

const selectGenre1 = selectBooksByGenre('genre1');
const selectGenre2 = selectBooksByGenre('genre2');
const selectGenre3 = selectBooksByGenre('genre3');

export { selectBooks, selectGenre1, selectGenre2, selectGenre3 };
