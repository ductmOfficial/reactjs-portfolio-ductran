import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from '@mui/material/styles';

// third-party
import { SnackbarProvider } from 'notistack';

// defaultTheme
import themes from 'themes';

// project imports
import config from 'config';
import NavigationScroll from 'layout/NavigationScroll';

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const [customization, setCustomization] = useState({
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    presetColor: 'default',
    navType: 'light',
  });

  const value = useMemo(
    () => ({
      customization,
      setCustomization,
      setOpenBackdrop,
    }),
    [customization]
  );

  return (
    <UIContext.Provider value={value}>
      {children(value)}

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext = ({ children }) => (
  <UIProvider>
    {({ customization }) => (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <NavigationScroll>{children}</NavigationScroll>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    )}
  </UIProvider>
);

UIProvider.propTypes = {
  children: PropTypes.func,
};

ManagedUIContext.propTypes = {
  children: PropTypes.node,
};
