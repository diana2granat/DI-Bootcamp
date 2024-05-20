// "src/categoriesSlice.js"
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', name: 'Work' },
    { id: '2', name: 'Personal' }
  ];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    editCategory: (state, action) => {
      const index = state.findIndex(category => category.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload);
    }
  }
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
