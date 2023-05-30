// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// third-party
import { IconCast } from '@tabler/icons';

const Logo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
    <IconCast size="2.5rem" style={{ marginRight: '10px' }} />
    <Typography
      variant="h1"
      noWrap
      sx={{
        display: { xs: 'none', sm: 'inline-block' },
        fontFamily: 'monospace',
        fontWeight: 900,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      D.MOVIEs
    </Typography>
    <Typography
      variant="h1"
      noWrap
      sx={{
        display: { xs: 'inline-block', sm: 'none' },
        fontFamily: 'monospace',
        fontWeight: 900,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      D.
    </Typography>
  </Box>
);

export default Logo;
