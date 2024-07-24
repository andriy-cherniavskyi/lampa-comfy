import Header from './components/common/Header';
import CartLayout from './layouts/CartLayout';
import MainLayout from './layouts/MainLayout';
import Cart from './views/Cart/Cart';
import Login from './views/Login';
import Products from './views/Products/Products';
import Signup from './views/Signup';
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
