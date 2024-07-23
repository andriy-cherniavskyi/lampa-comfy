import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductState {
  categories: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  categories: [],
  status: 'idle',
  error: null,
};

export const fetchProductsCategories = createAsyncThunk('products/fetchProductsCategories', async () => {
  const response = await axios.get('https://dummyjson.com/products/category-list');
  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsCategories.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProductsCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchProductsCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default categoriesSlice.reducer;
