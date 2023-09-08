import { HashLink } from 'react-router-hash-link';

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
  { title: 'About', path: '/#about-me' },
  { title: 'Experiences', path: '/#jobs' },
  { title: 'Work', path: '/#projects' },
  { title: 'Contact', path: '/#get-in-touch' },
];

const NavMenu = (props) => (
  <Stack direction="row" spacing={1} alignItems="center" {...props}>
    {pages.map(({ title, path }) => (
      <NavButton key={path} component={HashLink} to={path} smooth>
        {title}
      </NavButton>
    ))}
  </Stack>
);
export default NavMenu;
