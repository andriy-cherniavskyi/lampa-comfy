import { TextField, TextFieldProps } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { FC, memo } from 'react';
import { ChangeHandler, ControllerRenderProps } from 'react-hook-form';

type TControllerRenderProps = ControllerRenderProps<Record<string, string | null>>;

export type TCartInputProps = TControllerRenderProps &
  Pick<TextFieldProps, 'helperText' | 'error' | 'fullWidth'> & {
    label?: string;
    onBlur?: ChangeHandler | TControllerRenderProps['onBlur'];
    type?: string;
  };

// @ts-ignore
const CartFormField: FC<TCartInputProps> = memo(props => {
  const { value, onChange, label, disabled, error, helperText, type, ref, ...rest } = props;

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
          value={value ?? ''}
          inputRef={ref}
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
          key={label}
          label={label}
          variant="outlined"
          value={value}
          sx={{ marginBottom: '12px' }}
          onChange={event => handleChange(event.target.value)}
          onBlur={rest.onBlur}
          error={error}
          helperText={error ? 'Field is required' : ''}
        />
      );
  }
});

CartFormField.displayName = 'CartFormField';

export default CartFormField;
