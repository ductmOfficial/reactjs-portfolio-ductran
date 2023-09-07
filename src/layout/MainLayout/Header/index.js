// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';

// third-party
import { IconSunMoon } from '@tabler/icons-react';

// project imports
import HideOnScroll from 'components/HideOnScroll';
import { useUI } from 'context/uiContext';
import LogoSection from './LogoSection';
import NavMenu from './NavMenu';

const Header = () => {
  const theme = useTheme();
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

            <Tooltip title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'} arrow>
              <IconButton color="primary" aria-label="dark mode" onClick={onModeToggle} sx={{ bgcolor: 'background.default' }}>
                <IconSunMoon stroke={1.5} size="1.3rem" />
              </IconButton>
            </Tooltip>
            <Button variant="outlined" size="small" href="/resume.pdf" target="_blank">
              Download CV
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
