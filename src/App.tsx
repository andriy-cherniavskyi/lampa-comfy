import Header from './components/common/Header';
import CartLayout from './components/layouts/CartLayout';
import ProductsLayout from './components/layouts/ProductsLayout';
import Cart from './features/cart/Cart';
import Products from './features/products/Products';
import { enableMapSet } from 'immer';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

enableMapSet();

function App() {
  return (
    <SnackbarProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductsLayout>
                <Products />
              </ProductsLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <CartLayout>
                <Cart />
              </CartLayout>
            }
          />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
