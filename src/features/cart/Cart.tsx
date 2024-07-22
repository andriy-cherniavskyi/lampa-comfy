import { RootState } from '../../app/store';
import CartForm from '../../components/CartForm';
import CartProductCard from '../../components/CartProductCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

const Cart: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <Box>
      {cartItems.length === 0 ? (
        <Typography sx={{ textAlign: 'center', color: '#808080' }}>Your cart is empty</Typography>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ marginRight: '24px', maxHeight: '70vh', overflow: 'hidden', overflowY: 'scroll' }}>
            {cartItems.map(item => (
              <CartProductCard
                title={item.title}
                quantity={item.quantity}
                description={item.description}
                id={item.id}
                image={item.thumbnail}
                price={item.price}
              />
            ))}
          </Box>
          <CartForm />
        </Box>
      )}
      <Typography
        component="h2"
        sx={{ textDecoration: 'underline', fontWeight: 700, marginTop: '48px', fontSize: '20px' }}
      >
        Total: {totalAmount.toFixed(2)} $
      </Typography>
    </Box>
  );
};

export default Cart;
