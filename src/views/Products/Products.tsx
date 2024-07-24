import { fetchProducts } from '../../app/products/productSlice';
import Filters from '../../components/Filters';
import MockedProductCard from '../../components/MockedProductCard';
import ProductCard from '../../components/ProductCard';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Box from '@mui/material/Box';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const { products, needsRefetch } = useAppSelector(state => state.products);
  const productStatus = useAppSelector(state => state.products.status);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    if (
      selectedCategories.length === 0 &&
      (productStatus === 'idle' || productStatus === 'failed' || needsRefetch)
    ) {
      dispatch(fetchProducts());
    }
  }, [selectedCategories, dispatch, productStatus, needsRefetch]);

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    setSelectedCategories(prev =>
      event.target.checked ? [...prev, category] : prev.filter(c => c !== category),
    );
  };

  let content;

  if (productStatus === 'loading' || !products.length) {
    content = Array.from(new Array(9)).map((_el, index) => <MockedProductCard key={`${index}-card`} />);
  } else if (productStatus === 'succeeded' && products.length) {
    content = products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ));
  }

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <Filters handleCategoryChange={handleCategoryChange} />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
        {content}
      </Box>
    </Box>
  );
};

export default Products;
