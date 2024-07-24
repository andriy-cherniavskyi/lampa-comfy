import { login } from '../../app/auth/authSlice';
import { AppDispatch } from '../../app/store';
import CartFormField from '../../components/CartFormField';
import { loginFormFields } from '../../configs/authConfig';
import { loginSchema } from '../../configs/authSchema';
import { TLoginFormData } from '../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<TLoginFormData>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data: LoginFormInputs) => {
    try {
      await dispatch(login({ ...data })).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleLogin)}
      sx={{ width: '480px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
        {loginFormFields.map(item => (
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
      <Divider sx={{ marginTop: '18px', marginBottom: '18px' }}>
        <Chip
          label="or"
          size="small"
        />
      </Divider>
      <Link to="/signup">
        <Button
          fullWidth
          variant="outlined"
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
      </Link>
    </Box>
  );
};

export default Login;
