import React from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';
import Head from './Head';
import Header from './Header';
import MainContent from './MainContent';

const MainLayout = () => {
  const { socialMedia } = config;

  return (
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
            <Box
              sx={{
                display: { xs: 'flex' },
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mb: 1,
              }}
            >
              {socialMedia &&
                socialMedia.map(({ url, name, icon }) => {
                  const Icon = icon;
                  return (
                    <Box key={`${url}`}>
                      <IconButton href={url} target="_blank" aria-label={name} sx={{ color: 'text.primary' }}>
                        <Icon stroke={1.5} size="1.75rem" />
                      </IconButton>
                    </Box>
                  );
                })}
            </Box>
            <Typography variant="body2" align="center" color="text.secondary" fontFamily="monospace">
              Designed & Built by Duc Tran
            </Typography>
          </Box>
        </MainContent>
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;
