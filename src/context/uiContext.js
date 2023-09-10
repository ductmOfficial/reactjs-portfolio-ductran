import PropTypes from 'prop-types';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

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
import { STORAGE__THEME_MODE } from 'constants/storage';
import { THEME__MODE } from 'constants/theme';
import useLocalStorage from 'hooks/useLocalStorage';
import NavigationScroll from 'layout/NavigationScroll';

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [mode, setMode] = useLocalStorage(STORAGE__THEME_MODE, THEME__MODE.LIGHT);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const [customization, setCustomization] = useState({
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    presetColor: 'default',
    navType: 'light',
  });

  const handleModeToggle = useCallback(() => {
    setMode((prevMode) => (prevMode === THEME__MODE.LIGHT ? THEME__MODE.DARK : THEME__MODE.LIGHT));
  }, [setMode]);

  const value = useMemo(
    () => ({
      mode,
      isDarkMode: mode === THEME__MODE.DARK,
      customization,
      setCustomization,
      setOpenBackdrop,
      onModeToggle: handleModeToggle,
    }),
    [customization, handleModeToggle, mode]
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
    {({ customization, mode }) => (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization, mode)}>
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
