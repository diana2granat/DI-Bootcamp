// "src/store.js"
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialBooksState = {
  books: [
    { id: 1, title: 'title1', author: 'Author1', genre: 'genre1' },
    { id: 2, title: 'title2', author: 'Author2', genre: 'genre2' },
    { id: 3, title: 'title3', author: 'Author3', genre: 'genre3' },
    { id: 4, title: 'title4', author: 'Author4', genre: 'genre2' },
    { id: 5, title: 'title5', author: 'Author5', genre: 'genre1' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export default store;
