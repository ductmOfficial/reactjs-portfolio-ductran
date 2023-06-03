import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

// project imports
import { gridSpacing } from 'constants/theme';
import { MovieContent, MovieCredits, MovieMetadata } from '../../components';
import MovieBanner from './MovieBanner';
import MovieCollection from './MovieCollection';
import MovieInfo from './MovieInfo';
import MoviePhotos from './MoviePhotos';

const GridView = ({ loading, movie }) => {
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
              <MovieCollection {...movie.belongs_to_collection} />
              <MoviePhotos {...movie.images} />
            </Stack>
          </Box>
          <Box gridColumn="span 8">
            <Stack spacing={{ xs: 1, sm: 2 }}>
              <MovieMetadata {...movie} />
              <MovieContent {...movie} />
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default GridView;

GridView.propTypes = {
  movie: PropTypes.object,
  loading: PropTypes.bool,
};
