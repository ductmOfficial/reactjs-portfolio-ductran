import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';

// third-party
import { IconBellRinging, IconBookmarks, IconSearch } from '@tabler/icons';

// project imports
import HideOnScroll from 'components/HideOnScroll';
import LogoSection from './LogoSection';
import NavMenu from './NavMenu';

const Header = ({ onSearchOpen }) => (
  <HideOnScroll>
    <AppBar enableColorOnDark color="success" elevation={0} position="fixed" sx={{ bgcolor: 'common.white', color: 'text.primary' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          <LogoSection />
          <Box sx={{ ml: 3, display: { xs: 'none', lg: 'block' } }}>
            <NavMenu />
          </Box>
        </Box>

        <Box sx={{ flexGrow: 0, display: 'flex', gap: 1.5 }}>
          <IconButton
            aria-label="search"
            color="inherit"
            sx={{ bgcolor: ({ palette }) => alpha(palette.grey[300], 0.35) }}
            onClick={onSearchOpen}
          >
            <IconSearch />
          </IconButton>
          <IconButton
            component={NavLink}
            aria-label="my list"
            color="inherit"
            to="/watchlist"
            sx={{ bgcolor: ({ palette }) => alpha(palette.grey[300], 0.35) }}
          >
            <IconBookmarks />
          </IconButton>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ bgcolor: ({ palette }) => alpha(palette.grey[300], 0.35) }}
          >
            <Badge badgeContent={17} color="error">
              <IconBellRinging />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

export default Header;

Header.propTypes = {
  onSearchOpen: PropTypes.func,
};
