// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import BaseComponent from './components/MoviePhotos';

const MoviePhotos = () => (
  <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
    <Typography variant="h3" sx={{ mb: 2 }}>
      Photos
    </Typography>
    <BaseComponent />
  </Box>
);

export default MoviePhotos;

MoviePhotos.propTypes = {};
