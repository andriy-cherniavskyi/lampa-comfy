import MockedProductCard from '../../components/common/MockedProductCard';
import ProductCard from '../../components/common/ProductCard';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchProducts } from './productSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC, useEffect } from 'react';

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);
  const productStatus = useAppSelector(state => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === 'loading') {
    content = Array.from(new Array(9)).map((el, index) => <MockedProductCard key={`${index}-card`} />);
  } else if (productStatus === 'succeeded' && products.length) {
    content = products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ));
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px' }}>
        {content}
      </Box>
      {(productStatus === 'failed' || !products.length) && (
        <Box
          sx={{
            opacity: 0.6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <Typography
            component="h2"
            sx={{ fontSize: '18px' }}
          >
            No products are available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Products;
