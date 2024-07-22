import { removeItemFromCart } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Image from '../common/Image';
import QuantityModifier from '../common/QuantityModifier';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

type TCartProductCardProps = {
  title: string;
  description: string;
  image: string;
  id: number;
  quantity: number;
  price: number;
};

const CartProductCard: FC<TCartProductCardProps> = memo(
  ({ title, description, image, quantity, id, price }) => {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
      dispatch(removeItemFromCart(id));
    };

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #c6c6c6',
          borderRadius: '4px',
          marginBottom: '8px',
          padding: '8px 18px',
          position: 'relative',
        }}
      >
        <DeleteIcon
          sx={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            color: '#808080',
            cursor: 'pointer',

            ':hover': {
              opacity: 0.6,
            },
          }}
          onClick={handleRemove}
        />
        <Image
          src={image}
          alt="cart-item-image"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
          <Box sx={{ marginBottom: '16px' }}>
            <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
            <Typography>{description}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <QuantityModifier
              id={id}
              quantity={quantity}
            />
            <Typography sx={{ fontWeight: 700 }}>
              {price} x {quantity} = {price * quantity} $
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  },
);

CartProductCard.displayName = 'CartProductCard';

export default CartProductCard;
