import { addItemToCart } from '../../../features/cart/cartSlice';
import { Product } from '../../../features/products/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import Image from '../Image';
import { TProductCardProps } from './types';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC, memo } from 'react';

const ProductCard: FC<TProductCardProps> = memo(({ product }) => {
  const { title, description, price, thumbnail } = product;
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product) => {
    const cartItem = { ...product, quantity: 1 };
    dispatch(addItemToCart(cartItem));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #C6C6C6',
        borderRadius: '4px',
        alignItems: 'center',
        flex: '0 0 33.3333%',
      }}
    >
      <Image
        src={thumbnail}
        alt="product-image"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '12px',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ fontWeight: '700', marginBottom: '8px' }}>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            component="span"
            sx={{ fontWeight: 600, fontSize: '18px' }}
          >
            {price} $
          </Typography>
          <Button
            variant="text"
            sx={{
              padding: 0,
              color: '#808080',
              ':hover': {
                background: 'none',
                opacity: 0.6,
              },
            }}
            onClick={product => handleAddToCart}
            startIcon={<ShoppingBagIcon color="inherit" />}
          >
            <Typography component="span">Add to cart</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
