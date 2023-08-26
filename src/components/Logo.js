// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
    <Typography
      noWrap
      sx={{
        fontSize: '38px',
        fontWeight: 'bold',
        color: 'text.primary',
        textDecoration: 'none',
        display: { xs: 'none', sm: 'inline-block' },
        // fontFamily: 'monospace',
        // letterSpacing: '.3rem',
      }}
    >
      callme
      <Typography
        component="span"
        color="primary.main"
        sx={{
          fontSize: 'inherit',
          fontWeight: 'inherit',
        }}
      >
        douglas
      </Typography>
      .
    </Typography>
    <Typography
      noWrap
      sx={{
        fontSize: '38px',
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
        display: { xs: 'inline-block', sm: 'none' },
        // fontFamily: 'monospace',
        // letterSpacing: '.3rem',
      }}
    >
      douglas
    </Typography>
  </Box>
);

export default Logo;
