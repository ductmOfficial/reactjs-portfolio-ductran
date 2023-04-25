// material-ui
import { Backdrop, Stack } from '@mui/material';

// project imports
import Logo from 'components/Logo';

const InitializedLoader = () => (
  <Backdrop sx={{ bgcolor: '#e3edf7', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
    <Stack spacing={8}>
      <Logo />
    </Stack>
  </Backdrop>
);

export default InitializedLoader;
