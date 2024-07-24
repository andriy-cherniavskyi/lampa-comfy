import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from '../../../app/cart/cartSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC, memo } from 'react';

type TQuantityModifierProps = {
  id: number;
  quantity: number;
};

const QuantityModifier: FC<TQuantityModifierProps> = memo(({ id, quantity }) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(decreaseItemQuantity(id));
    } else {
      dispatch(removeItemFromCart(id));
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        sx={{
          display: 'flex',
          cursor: 'pointer',
          color: '#808080',
          background: '#ededed',
          borderRadius: '4px',
          marginRight: '5px',
        }}
        onClick={handleDecreaseQuantity}
      >
        <RemoveIcon />
      </Typography>
      <Typography sx={{ color: '#000000' }}>{quantity}</Typography>
      <Typography
        sx={{
          display: 'flex',
          cursor: 'pointer',
          color: '#808080',
          background: '#ededed',
          borderRadius: '4px',
          marginLeft: '5px',
        }}
        onClick={handleIncreaseQuantity}
      >
        <AddIcon />
      </Typography>
    </Box>
  );
});

QuantityModifier.displayName = 'QuantityModifier';

export default QuantityModifier;
