import PropTypes from 'prop-types';

// material-ui
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';

// third-party
import { IconBellRinging, IconBrightnessDown, IconSearch } from '@tabler/icons';

// project imports
import HideOnScroll from 'components/HideOnScroll';
import { useUI } from 'context/uiContext';
import LogoSection from './LogoSection';
import NavMenu from './NavMenu';

const Header = ({ onSearchOpen }) => {
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
            <Box sx={{ ml: 3, display: { xs: 'none', lg: 'block' } }}>
              <NavMenu />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', gap: 1.5 }}>
            <StyledIconButton color="inherit" aria-label="search" onClick={onSearchOpen}>
              <IconSearch />
            </StyledIconButton>
            <StyledIconButton color="inherit" aria-label="dark-mode" onClick={onModeToggle}>
              <IconBrightnessDown />
            </StyledIconButton>
            <StyledIconButton color="inherit" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="error">
                <IconBellRinging />
              </Badge>
            </StyledIconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

const StyledIconButton = styled((props) => (
  <IconButton {...props} sx={{ bgcolor: ({ palette }) => alpha(palette.grey[300], 0.35), ...props.sx }} />
))(() => ({}));

export default Header;

Header.propTypes = {
  onSearchOpen: PropTypes.func,
};
