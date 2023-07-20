import './Header.css'

// NAVBAR COMPONENTS
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
            src='https://www.bixal.com/static/e90efae7e816749d805876341ba16f9a/bixal-logo-full.svg'
            className='headerLogo'
            />
        </Toolbar>
      </AppBar>
    </Box>
  );
}