import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { themeConfig } from 'constants/theme';

const StyledAvatar = styled((props) => <Avatar variant={themeConfig.shape.borderRadius ? 'circular' : 'square'} {...props} />)(() => ({}));

export default StyledAvatar;
