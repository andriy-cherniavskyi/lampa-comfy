import { TLayoutProps } from '../../types';
import Container from '@mui/material/Container';
import { FC, memo } from 'react';

const CartLayout: FC<TLayoutProps> = memo(({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ padding: '36px' }}
    >
      {children}
    </Container>
  );
});

CartLayout.displayName = 'CartLayout';

export default CartLayout;
