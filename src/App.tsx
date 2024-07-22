import Header from './components/common/Header';
import ProductLayout from './components/layouts/ProductLayout';
import Products from './features/products/Products';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductLayout>
        <Products />
      </ProductLayout>
    </div>
  );
}

export default App;
