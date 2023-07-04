// material-ui
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Media = styled((props) => <Box display="flex" flexDirection="row" gap={1} {...props} />)(() => ({}));

export const MediaImage = styled((props) => <Box flex="0 0 auto" width="30%" {...props} />)(() => ({}));

export const MediaBody = styled((props) => <Box flex="1 1" {...props} />)(() => ({}));

export const MediaObject = styled(({ dividers, ...props }) => (
  <Box
    display="flex"
    flexDirection="column"
    {...props}
    sx={{
      '> div': { pb: 1, mb: 1 },
      '> div:last-child': { pb: 0, mb: 0 },
      ...(dividers && { '> div:not(:last-child)': { borderBottom: ({ palette }) => `1px solid ${palette.divider}` } }),
      ...props.sx,
    }}
  />
))(() => ({}));

export default Media;
