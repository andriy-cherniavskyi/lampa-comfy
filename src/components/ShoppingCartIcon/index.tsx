import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from '@mui/material';
import React, { FC, memo } from 'react';

const ShoppingCartIcon: FC = memo(() => {
  return (
    <Link
      href="/cart"
      sx={{ cursor: 'pointer', color: '#fff', marginRight: '10px' }}
    >
      <ShoppingBagIcon color="inherit" />
    </Link>
  );
});

ShoppingCartIcon.displayName = 'ShoppingCartIcon';

export default ShoppingCartIcon;
