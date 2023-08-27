// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

// third-party
import { IconBellRinging, IconBrightnessDown } from '@tabler/icons';
import { IconPhoneCall } from '@tabler/icons-react';

// project imports
import HideOnScroll from 'components/HideOnScroll';
import { useUI } from 'context/uiContext';
import LogoSection from './LogoSection';
import NavMenu from './NavMenu';

const Header = () => {
  const { isDarkMode, onModeToggle } = useUI();

  return (
    <HideOnScroll>
      <AppBar
        elevation={0}
        position="fixed"
        color="default"
        sx={{ bgcolor: 'background.paper', color: 'text.primary' }}
        enableColorOnDark={isDarkMode}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            <LogoSection />
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: 1.5 }}>
            <NavMenu sx={{ ml: 3, display: { xs: 'none', lg: 'flex' } }} />
            <IconButton color="inherit" aria-label="search" sx={{ bgcolor: 'background.default' }}>
              <IconPhoneCall stroke={1.5} size="1.3rem" />
            </IconButton>
            <IconButton color="inherit" aria-label="dark-mode" onClick={onModeToggle} sx={{ bgcolor: 'background.default' }}>
              <IconBrightnessDown />
            </IconButton>
            <IconButton color="inherit" aria-label="show 17 new notifications" sx={{ bgcolor: 'background.default' }}>
              <IconBellRinging />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
