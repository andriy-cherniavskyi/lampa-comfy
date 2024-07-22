import { TLayoutProps } from '../../../types';
import Container from '@mui/material/Container';
import { FC, memo } from 'react';

const ProductLayout: FC<TLayoutProps> = memo(({ children }) => {
  return <Container sx={{ padding: '48px' }}>{children}</Container>;
});

ProductLayout.displayName = 'ProductLayout';

export default ProductLayout;
