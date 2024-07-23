import { TLayoutProps } from '../../../types';
import Container from '@mui/material/Container';
import { FC, memo } from 'react';

const ProductsLayout: FC<TLayoutProps> = memo(({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ padding: '48px 12px' }}
    >
      {children}
    </Container>
  );
});

ProductsLayout.displayName = 'ProductsLayout';

export default ProductsLayout;
