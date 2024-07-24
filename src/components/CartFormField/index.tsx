import { TextField, TextFieldProps } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { forwardRef } from 'react';
import { ChangeHandler, ControllerRenderProps } from 'react-hook-form';

type TControllerRenderProps = ControllerRenderProps<Record<string, string | null>>;

export type TCartInputProps = TControllerRenderProps &
  Pick<TextFieldProps, 'helperText' | 'error' | 'fullWidth'> & {
    label?: string;
    onBlur?: ChangeHandler | TControllerRenderProps['onBlur'];
    type?: string;
  };

// @ts-ignore
const CartFormField = forwardRef<any, TCartInputProps>((props, ref) => {
  const { value, onChange, label, disabled, error, helperText, type, ...rest } = props;

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  switch (type) {
    case 'phone':
      return (
        <MuiTelInput
          {...rest}
          ref={ref}
          value={value ?? ''}
          onlyCountries={['UA']}
          defaultCountry="UA"
          helperText={error ? 'Phone number is invalid' : ''}
          error={error}
          onChange={handleChange}
          onBlur={rest.onBlur}
        />
      );
    case 'text':
      return (
        <TextField
          ref={ref}
          key={label}
          label={label}
          variant="outlined"
          value={value ?? ''}
          sx={{ marginBottom: '12px' }}
          onChange={event => handleChange(event.target.value)}
          onBlur={rest.onBlur}
          error={error}
          helperText={helperText ?? ''}
        />
      );
  }
});

CartFormField.displayName = 'CartFormField';

export default CartFormField;
