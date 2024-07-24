import Header from './components/common/Header';
import CartLayout from './components/layouts/CartLayout';
import MainLayout from './components/layouts/MainLayout';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
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
              <MainLayout>
                <Products />
              </MainLayout>
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
          <Route
            path="/login"
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <MainLayout>
                <Signup />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
