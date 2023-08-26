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
  { title: 'About me', path: '#about-me' },
  { title: 'Education', path: '#education' },
  { title: 'Experiences & Skills', path: '#experiences-skills' },
  { title: 'Contact', path: '#get-in-touch' },
];

const NavMenu = (props) => (
  <Stack direction="row" spacing={1} alignItems="center" {...props}>
    {pages.map(({ title, path }) => (
      <NavButton key={path} component={HashLink} to={path} smoot>
        {title}
      </NavButton>
    ))}
  </Stack>
);
export default NavMenu;
