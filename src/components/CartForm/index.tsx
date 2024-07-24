import { clearCart } from '../../app/cart/cartSlice';
import { createOrder } from '../../app/order/orderSlice';
import { RootState } from '../../app/store';
import { cartFormFields } from '../../configs/cartFormConfing';
import { cartSchema } from '../../configs/cartFormSchema';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { TCartFormData } from '../../types';
import CartFormField from '../CartFormField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartForm: FC = memo(() => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart); // Access cart items from the store

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<TCartFormData>({
    mode: 'onBlur',
    resolver: yupResolver(cartSchema),
  });

  const handleCompleteOrder = async (data: any) => {
    try {
      const orderData = {
        name: data.name,
        surname: data.surname,
        address: data.address,
        phone: data.phone,
        items: items,
        total: totalAmount,
      };

      await dispatch(createOrder(orderData)).unwrap();

      reset();
      dispatch(clearCart());
      localStorage.removeItem('cartState');
      navigate('/');
      return enqueueSnackbar('Your order is completed', {
        variant: 'success',
        autoHideDuration: 3000,
      });
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleCompleteOrder)}
      sx={{ width: '480px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
        {cartFormFields.map(item => (
          <Controller
            key={item.fieldName}
            control={control}
            name={item.fieldName}
            rules={{ required: item.isRequired }}
            render={({ field }) => (
              <CartFormField
                {...field}
                fullWidth
                key={item.fieldName}
                type={item.type}
                label={item.label}
                error={!!errors[item.fieldName]}
                helperText={errors?.[item.fieldName]?.message}
              />
            )}
          />
        ))}
      </Box>
      <Button
        fullWidth
        variant="outlined"
        type="submit"
        color="info"
        disabled={isSubmitting || !isValid}
        sx={{ textTransform: 'uppercase', border: '1px solid #808080' }}
      >
        Order
      </Button>
    </Box>
  );
});

CartForm.displayName = 'CartForm';

export default CartForm;
