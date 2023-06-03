import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

const MovieSimilar = ({ movies = [] }) => {
  if (!movies || !movies.length) return null;

  return (
    <MainCard title="Similar Movies">
      <Box sx={{ p: 2, bgcolor: 'background.default' }}>{movies.map(({ title }) => title).join(', ')}</Box>
    </MainCard>
  );
};

export default MovieSimilar;

MovieSimilar.propTypes = {
  movies: PropTypes.array,
};
