// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import BaseComponent from './components/MovieInfo';

const MovieInfo = () => (
  <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
    <Typography variant="h3" sx={{ mb: 2 }}>
      Info
    </Typography>
    <BaseComponent />
  </Box>
);

export default MovieInfo;

MovieInfo.propTypes = {};
