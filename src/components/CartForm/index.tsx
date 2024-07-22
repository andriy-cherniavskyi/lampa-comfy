import { cartFormFields } from '../../configs/cartFormConfing';
import { cartSchema } from '../../configs/cartFormSchema';
import { TCartFormData } from '../../types';
import CartFormField from '../CartFormField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';

const CartForm: FC = memo(() => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TCartFormData>({
    mode: 'onBlur',
    resolver: yupResolver(cartSchema),
  });

  const handleCompleteOrder = () => {
    return enqueueSnackbar('Your order is completed', {
      variant: 'success',
      autoHideDuration: 3000,
    });
  };

  return (
    <Box
      component="form"
      data-testid="personal-details-form"
      onSubmit={handleSubmit(handleCompleteOrder)}
      sx={{ width: '480px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
        {cartFormFields.map(item => (
          <Controller
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
