// "src/store.js"
import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

