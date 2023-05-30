// material-ui
import { styled } from '@mui/material/styles';

const MainContent = styled('main', { shouldForwardProp: (prop) => prop })(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  minHeight: 'calc(100vh - 85px)',
  backgroundColor: theme.palette.background.default,
  marginTop: '65px',

  [theme.breakpoints.up('xs')]: {
    marginTop: '65px',
  },

  [theme.breakpoints.up('sm')]: {
    marginTop: '65px',
  },
}));

export default MainContent;
