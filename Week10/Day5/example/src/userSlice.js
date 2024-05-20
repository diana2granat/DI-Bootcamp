// "src/userSlice.js"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  age: 0,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return response.data;
  }
);

export const ageUpAsync = createAsyncThunk(
  'user/ageUp',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(setLoading(false));
    return 1;
  }
);

export const ageDownAsync = createAsyncThunk(
  'user/ageDown',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch(setLoading(false));
    return -1;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age += action.payload;
      });
  },
});

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;
