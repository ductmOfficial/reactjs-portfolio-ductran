// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

// project imports
import HideOnScroll from 'components/HideOnScroll';
import LogoSection from './LogoSection';
import NavMenu from './NavMenu';

const Header = () => (
  <HideOnScroll>
    <AppBar elevation={0} position="fixed" color="default" sx={{ bgcolor: 'background.default', color: 'text.secondary' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          <LogoSection />
        </Box>

        <Box sx={{ flexGrow: 0, display: 'flex', gap: 1.5 }}>
          <NavMenu sx={{ ml: 3, display: { xs: 'none', lg: 'flex' } }} />

          <Button variant="outlined" size="small" href="/resume.pdf" target="_blank">
            Download CV
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

export default Header;
