// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import Logo from 'components/Logo';
import * as routes from 'constants/routes';

const LogoSection = () => (
  <ButtonBase disableRipple component="a" href={routes.HOME}>
    <Logo />
  </ButtonBase>
);

export default LogoSection;
