import { CartItem } from '../cart/cartSlice';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface OrderState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: OrderState = {
  status: 'idle',
  error: null,
};

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderData: { phone: string; items: CartItem[] }, thunkAPI) => {
    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to create order');
    }
  },
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createOrder.pending, state => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, state => {
        state.status = 'succeeded';
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default orderSlice.reducer;
