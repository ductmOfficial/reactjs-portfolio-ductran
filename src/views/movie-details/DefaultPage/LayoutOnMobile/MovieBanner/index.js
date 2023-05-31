// material-ui
import Box from '@mui/material/Box';

// project imports

const MovieBanner = () => (
  <Box sx={{ p: 2, bgcolor: 'primary.light' }}>
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Backdrop</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 50 }}>Title</Box>
    </Box>
  </Box>
);

export default MovieBanner;

MovieBanner.propTypes = {};
