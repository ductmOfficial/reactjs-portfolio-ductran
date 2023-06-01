// material-ui
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

const MovieReviews = () => (
  <MainCard title="Movie Reviews">
    <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
  </MainCard>
);

export default MovieReviews;

MovieReviews.propTypes = {};
