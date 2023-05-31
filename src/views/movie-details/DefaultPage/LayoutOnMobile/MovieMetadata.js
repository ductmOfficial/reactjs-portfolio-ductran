// material-ui
import Box from '@mui/material/Box';

// project imports
import { MovieMetadata as BaseComponent } from '../components';

const MovieMetadata = ({ ...props }) => (
  <Box sx={{ px: 1 }}>
    <BaseComponent {...props} />
  </Box>
);

export default MovieMetadata;
