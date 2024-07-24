import { logout, selectIsAuthenticated } from '../../../features/auth/authSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import ShoppingCartIcon from '../../ShoppingCartIcon';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header: FC = memo(() => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <AppBar position="sticky">
      <Box
        sx={{
          background: 'linear-gradient(180deg, rgba(69,73,108,1) 0%, rgba(22,26,65,1) 72%)',
          padding: '0 24px',
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Lampa
            </Typography>
          </Link>

          <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
            <ShoppingCartIcon />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {isAuthenticated ? (
                <MenuItem
                  onClick={handleLogout}
                  sx={{ color: '#000000' }}
                >
                  Logout
                </MenuItem>
              ) : (
                <Box>
                  <Link to="/login">
                    <MenuItem sx={{ color: '#000000' }}>Login</MenuItem>
                  </Link>
                  <Link to="/signup">
                    <MenuItem sx={{ color: '#000000' }}>Signup</MenuItem>
                  </Link>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;
