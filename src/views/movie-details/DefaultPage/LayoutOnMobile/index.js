import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';

// project imports
import { MovieContent, MovieCredits, MovieReviews } from '../components';
import MovieBanner from './MovieBanner';
import MovieMetadata from './MovieMetadata';
import MovieProfile from './MovieProfile';

const LayoutOnMobile = ({ loading, movie }) => {
  if (loading) return null;

  return (
    <Stack spacing={{ xs: 1, sm: 2 }}>
      <MovieBanner {...movie} />
      <MovieMetadata {...movie} />
      <MovieProfile movie={movie} />
      <MovieCredits {...movie.credits} />
      <MovieReviews reviews={movie.reviews} />
      <MovieContent movie={movie} />
    </Stack>
  );
};

export default LayoutOnMobile;

LayoutOnMobile.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
};
