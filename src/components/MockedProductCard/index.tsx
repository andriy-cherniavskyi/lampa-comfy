import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import { FC, memo } from 'react';

const MockedProductCard: FC = memo(() => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '320px' }}>
      <Skeleton
        variant="rectangular"
        height={180}
        sx={{ marginBottom: '10px', width: '100%' }}
      />
      <Skeleton
        variant="text"
        sx={{ marginBottom: '10px', width: '100%' }}
      />
      <Skeleton
        variant="text"
        sx={{ marginBottom: '10px', width: '100%' }}
      />
      <Skeleton
        variant="text"
        sx={{ marginBottom: '10px', width: '100%' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '100%' }}>
        <Skeleton
          variant="text"
          width={50}
          height={42}
        />
        <Skeleton
          variant="text"
          width={180}
        />
      </Box>
    </Box>
  );
});

MockedProductCard.displayName = 'MockedProductCard';
export default MockedProductCard;
