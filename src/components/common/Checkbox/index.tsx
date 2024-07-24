import { toggleCategory } from '../../../app/products/productSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { Checkbox as MuiCheckbox } from '@mui/material';
import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react';

type TCheckboxProps = {
  category: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<TCheckboxProps> = memo(({ category, onChange }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);

  const handleFilterByCategory = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      setChecked(isChecked);

      dispatch(toggleCategory(category));

      onChange(event);
    },
    [category, dispatch, onChange],
  );

  return (
    <MuiCheckbox
      checked={checked}
      onChange={handleFilterByCategory}
      value={category}
      sx={{ cursor: 'pointer' }}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
