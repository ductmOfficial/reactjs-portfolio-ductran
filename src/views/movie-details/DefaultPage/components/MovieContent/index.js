// material-ui
import Box from '@mui/material/Box';

// project imports

const MovieContent = () => (
  <Box sx={{ p: 2, bgcolor: 'primary.light', minHeight: 220 }}>
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Trailer</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Similar Movies</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Trailer</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Trailer</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Similar Movies</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Trailer</Box>
      <Box sx={{ p: 2, bgcolor: 'background.paper', minHeight: 100 }}>Recommedation for YOU</Box>
    </Box>
  </Box>
);

export default MovieContent;

MovieContent.propTypes = {};
