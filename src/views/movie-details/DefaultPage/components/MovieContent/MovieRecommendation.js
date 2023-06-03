import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

const MovieRecommendation = ({ movies = [] }) => {
  if (!movies || !movies.length) return null;

  return (
    <MainCard title="Recommendation">
      <Box sx={{ p: 2, bgcolor: 'background.default' }}>{movies.map(({ title }) => title).join(', ')}</Box>
    </MainCard>
  );
};

export default MovieRecommendation;

MovieRecommendation.propTypes = {
  movies: PropTypes.array,
};
