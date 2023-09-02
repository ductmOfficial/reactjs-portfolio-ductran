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
        color: 'text.secondary',
        textDecoration: 'none',
      }}
    >
      iam
      <Typography
        component="span"
        color="primary.main"
        sx={{
          fontSize: 'inherit',
          fontWeight: 'inherit',
        }}
      >
        duc
      </Typography>
      .
    </Typography>
  </Box>
);

export default Logo;
