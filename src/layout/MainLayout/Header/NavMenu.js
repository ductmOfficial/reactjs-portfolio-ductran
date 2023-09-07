import { HashLink } from 'react-router-hash-link';

// material-ui
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

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
    {pages.map(({ title, path }, index) => (
      <NavButton
        key={path}
        component={HashLink}
        to={path}
        smooth
        sx={{
          fontFamily: 'monospace',
        }}
      >
        <Typography
          component="span"
          sx={{
            mr: 0.5,
            color: 'primary.main',
            fontSize: '0.9em',
            lineHeight: '1.3',
          }}
        >{`${index.toString().padStart(2, '0')}.`}</Typography>
        {title}
      </NavButton>
    ))}
  </Stack>
);
export default NavMenu;
