import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// project imports
import Head from './Head';
import Header from './Header';
import MainContent from './MainContent';
import SearchDrawer from './SearchDrawer';
import { Typography } from '@mui/material';

const MainLayout = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <React.Fragment>
      <Head />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* header */}
        <Header onSearchOpen={() => setOpenSearch(true)} />

        {/* main content */}
        <MainContent>
          <Outlet />

          <Box sx={{ py: 2, textAlign: 'center' }}>
            <Typography color="text.secondary">Designed & Built by Duc Tran</Typography>
          </Box>
        </MainContent>

        <SearchDrawer open={openSearch} onClose={() => setOpenSearch(false)} onOpen={() => setOpenSearch(true)} />
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;
