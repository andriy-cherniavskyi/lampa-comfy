import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ProductState {
  loading: boolean;
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedCategories: Array<string>;
  needsRefetch: boolean;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
  loading: false,
  selectedCategories: [],
  needsRefetch: false,
};

export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
});

export const fetchProductsByCategory = createAsyncThunk<Product[], string[]>(
  'products/fetchProductsByCategory',
  async (categories: string[]) => {
    const responses = await Promise.all(
      categories.map(category =>
        axios.get(`https://dummyjson.com/products/category/${encodeURIComponent(category)}`),
      ),
    );

    const products = responses.flatMap(response => response.data.products);
    return products as Product[];
  },
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleCategory(state, action) {
      const category = action.payload;
      const index = state.selectedCategories.indexOf(category);

      if (index > -1) {
        state.selectedCategories.splice(index, 1);
      } else {
        state.selectedCategories.push(category);
      }
    },
    resetRefetchFlag(state) {
      state.needsRefetch = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.needsRefetch = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
        state.needsRefetch = false;
      })
      .addCase(fetchProductsByCategory.pending, state => {
        state.status = 'loading';
        state.error = null;
        state.needsRefetch = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.needsRefetch = true;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
        state.needsRefetch = true;
      });
  },
});

export const { toggleCategory, resetRefetchFlag } = productSlice.actions;

export default productSlice.reducer;
