import { TLayoutProps } from '../../../types';
import Container from '@mui/material/Container';
import { FC, memo } from 'react';

const ProductsLayout: FC<TLayoutProps> = memo(({ children }) => {
  return <Container sx={{ padding: '48px' }}>{children}</Container>;
});

ProductsLayout.displayName = 'ProductsLayout';

export default ProductsLayout;
