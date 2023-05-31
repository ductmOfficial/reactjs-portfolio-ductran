import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

// project imports
import { MovieContent, MovieCredits, MovieMetadata, MovieReviews } from '../components';
import MovieBanner from './MovieBanner';
import MovieCollection from './MovieCollection';
import MovieInfo from './MovieInfo';
import MoviePhotos from './MoviePhotos';
import { gridSpacing } from 'constants/theme';

const LayoutOnDesktop = ({ loading, movie }) => {
  if (loading) return null;

  return (
    <Box>
      <MovieBanner {...movie} />
      <Container maxWidth="xl">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ mt: 2 }}>
          <Box gridColumn="span 4">
            <Stack spacing={{ xs: gridSpacing('small'), sm: gridSpacing() }}>
              <MovieInfo {...movie} />
              <MovieCredits {...movie.credits} />
              <MovieCollection collection={movie.belongs_to_collection} />
              <MoviePhotos movie={movie} />
            </Stack>
          </Box>
          <Box gridColumn="span 8">
            <Stack spacing={{ xs: 1, sm: 2 }}>
              <MovieMetadata {...movie} />
              <MovieReviews reviews={movie.reviews} />
              <MovieContent movie={movie} />
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LayoutOnDesktop;

LayoutOnDesktop.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
};
