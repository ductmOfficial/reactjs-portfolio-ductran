import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

export default styled(Box)(({ theme }) => ({
  position: 'relative',

  '@media (maxWidth: 768px)': {
    margin: '50px auto 0',
    width: '70%',
  },

  '.wrapper': {
    display: 'block',
    position: 'relative',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.secondary.main, 0.5),

    '.img': {
      display: 'block',
      position: 'relative',
      borderRadius: '10px',
      mixBlendMode: 'multiply',
      filter: 'grayscale(100%) contrast(1)',
      transition: 'all 500 cubic-bezier(0.645, 0.045, 0.355, 1)',
      maxWidth: '100%',
      zIndex: 2,
    },

    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      transition: 'all 500 cubic-bezier(0.645, 0.045, 0.355, 1)',

      border: '3px solid',
      borderColor: theme.palette.secondary.main,
      top: '20px',
      left: '20px',
    },
  },
}));
