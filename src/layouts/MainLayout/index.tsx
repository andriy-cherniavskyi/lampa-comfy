import { TLayoutProps } from '../../types';
import Container from '@mui/material/Container';
import { FC, memo } from 'react';

const MainLayout: FC<TLayoutProps> = memo(({ children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        padding: '48px 12px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {children}
    </Container>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
