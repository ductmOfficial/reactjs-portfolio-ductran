import { NavLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const NavButton = styled(Button)(() => ({
  color: 'inherit',
  whiteSpace: 'nowrap',
  '&.active': {
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.035)',
  },
}));

const pages = [
  { title: 'Home', path: '/home' },
  { title: 'Feeds', path: '/feeds' },
  { title: 'TV Shows', path: '/tv-shows' },
  { title: 'Movies', path: '/movies' },
  { title: 'Celebs', path: '/celebs' },
  { title: 'Watch', path: '/watch' },
];

const NavMenu = () => (
  <Stack direction="row" spacing={1}>
    {pages.map(({ title, path }) => (
      <NavButton key={path} component={NavLink} to={path}>
        {title}
      </NavButton>
    ))}
  </Stack>
);
export default NavMenu;
