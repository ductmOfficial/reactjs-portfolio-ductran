import PropTypes from 'prop-types';

// material-ui
import Stack from '@mui/material/Stack';

// project imports
import { MovieContent, MovieCredits } from '../../components';
import MovieHero from './MovieHero';
import MovieMetadata from './MovieMetadata';
import MovieProfile from './MovieProfile';

const ListView = ({ loading, movie }) => {
  if (loading) return null;

  return (
    <Stack spacing={{ xs: 1, sm: 2 }}>
      <MovieHero {...movie} />
      <MovieMetadata {...movie} />
      <MovieProfile movie={movie} />
      <MovieCredits {...movie.credits} />
      <MovieContent {...movie} />
    </Stack>
  );
};

export default ListView;

ListView.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
};
