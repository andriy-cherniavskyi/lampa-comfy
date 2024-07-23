import { fetchProductsCategories } from '../../features/categories/categoriesSlice';
import { fetchProductsByCategory } from '../../features/products/productSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Checkbox from '../common/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { ChangeEvent, FC, memo, useEffect } from 'react';

type TFilterProps = {
  handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Filters: FC<TFilterProps> = memo(({ handleCategoryChange }) => {
  const dispatch = useAppDispatch();
  const { categories, status } = useAppSelector(state => state.categories);
  const selectedCategories = useAppSelector(state => state.products.selectedCategories);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsCategories());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      dispatch(fetchProductsByCategory(selectedCategories));
    }
  }, [dispatch, selectedCategories]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300px',
        maxHeight: '80vh',
        overflow: 'hidden',
        overflowY: 'scroll',
        border: '1px solid #C6C6C6',
        borderRadius: '4px',
        marginRight: '12px',
        padding: '8px',
      }}
    >
      <Typography sx={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>Categories</Typography>
      {categories?.map(category => (
        <Box
          key={category}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Checkbox
            category={category}
            onChange={handleCategoryChange}
          />
          <Typography sx={{ textTransform: 'capitalize' }}>{category}</Typography>
        </Box>
      ))}
    </Box>
  );
});

Filters.displayName = 'Filters';

export default Filters;
