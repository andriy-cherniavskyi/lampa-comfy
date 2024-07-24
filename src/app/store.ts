import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import productReducer from '../features/products/productSlice';
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
