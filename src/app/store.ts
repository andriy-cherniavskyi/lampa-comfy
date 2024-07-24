import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import categoriesReducer from './categories/categoriesSlice';
import productReducer from './products/productSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
