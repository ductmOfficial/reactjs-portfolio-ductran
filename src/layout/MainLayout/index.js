import React from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// project imports
import { Typography } from '@mui/material';
import Head from './Head';
import Header from './Header';
import MainContent from './MainContent';

const MainLayout = () => (
  <React.Fragment>
    <Head />
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* header */}
      <Header />

      {/* main content */}
      <MainContent>
        <Outlet />

        <Box sx={{ py: 2 }}>
          <Typography variant="body2" align="center" color="text.secondary" fontFamily="monospace">
            Designed & Built by Duc Tran
          </Typography>
        </Box>
      </MainContent>
    </Box>
  </React.Fragment>
);

export default MainLayout;
