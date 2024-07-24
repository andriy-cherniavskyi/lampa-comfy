import { Product } from '../products/productSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const loadStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return { items: [], totalAmount: 0 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [], totalAmount: 0 };
  }
};
const saveStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    console.error(err);
  }
};

const initialState: CartState = loadStateFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      state.items.push({ ...action.payload, quantity: 1 });
      state.totalAmount += action.payload.price;
      saveStateToLocalStorage(state);
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
        saveStateToLocalStorage(state);
      }
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalAmount += existingItem.price;
        saveStateToLocalStorage(state);
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalAmount -= existingItem.price;
        saveStateToLocalStorage(state);
      } else {
        state.items = state.items.filter(item => item.id !== action.payload);
        saveStateToLocalStorage(state);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
