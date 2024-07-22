import { useAppSelector } from '../../hooks/useAppSelector';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Typography from '@mui/material/Typography';
import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartIcon: FC = memo(() => {
  const cartItems = useAppSelector(state => state.cart.items);
  return (
    <Link to="/cart">
      <Typography
        sx={{
          position: 'relative',
          display: 'flex',

          '&::before': {
            content: '" "',
            position: 'absolute',
            width: '10px',
            height: '10px',
            borderRadius: '100%',
            background: 'red',
            bottom: '-2px',
            left: 0,
            display: cartItems.length ? 'block' : 'none',
          },
        }}
      >
        <ShoppingBagIcon color="inherit" />
      </Typography>
    </Link>
  );
});

ShoppingCartIcon.displayName = 'ShoppingCartIcon';

export default ShoppingCartIcon;
