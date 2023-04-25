// material-ui
import { styled } from '@mui/material/styles';

const MainContent = styled('main', { shouldForwardProp: (prop) => prop })(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  minHeight: 'calc(100vh - 85px)',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('xs')]: {
    marginTop: '65px',
  },

  [theme.breakpoints.up('sm')]: {
    marginTop: '75px',
  },
}));

export default MainContent;
