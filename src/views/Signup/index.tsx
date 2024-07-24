import { signup } from '../../app/auth/authSlice';
import { AppDispatch } from '../../app/store';
import CartFormField from '../../components/CartFormField';
import { signupFormFields } from '../../configs/authConfig';
import { signupSchema } from '../../configs/authSchema';
import { TSignupFormData } from '../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import React, { FC, memo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

interface SignupFormInputs {
  username: string;
  password: string;
  confirmPassword: string;
}

const Signup: FC = memo(() => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TSignupFormData>({
    mode: 'onBlur',
    resolver: yupResolver(signupSchema),
  });

  const handleSignup = async (data: SignupFormInputs) => {
    try {
      await dispatch(signup(data)).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleSignup)}
      sx={{ width: '480px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
        {signupFormFields.map(item => (
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
      <Link to="/login">
        <Button
          fullWidth
          variant="outlined"
          color="info"
          sx={{
            textTransform: 'uppercase',
            border: 'none',
            background: '#808080',
            color: '#FFFFFF',
            ':hover': { background: '#808080', color: '#FFFFFF', border: 'none', opacity: 0.6 },
          }}
        >
          Login
        </Button>
      </Link>
      <Divider sx={{ marginTop: '18px', marginBottom: '18px' }}>
        <Chip
          label="or"
          size="small"
        />
      </Divider>
      <Button
        fullWidth
        variant="outlined"
        type="submit"
        disabled={isSubmitting || !isValid}
        sx={{
          textTransform: 'uppercase',
          border: 'none',
          background: '#808080',
          color: '#FFFFFF',
          ':hover': { background: '#808080', color: '#FFFFFF', border: 'none', opacity: 0.6 },
        }}
      >
        Signup
      </Button>
    </Box>
  );
});

Signup.displayName = 'Signup';

export default Signup;
