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
  const { value, onChange, label, disabled, error, helperText, type, ...rest } = props;

  switch (type) {
    case 'phone':
      return (
        <MuiTelInput
          value={value as string}
          defaultCountry="UA"
        />
      );
    case 'text':
      return (
        <TextField
          label={label}
          variant="outlined"
          value={value}
          sx={{ marginBottom: '12px' }}
        />
      );
  }
});

CartFormField.displayName = 'CartFormField';

export default CartFormField;
