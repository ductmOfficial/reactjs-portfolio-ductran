import { useParams } from 'react-router';

// material-ui
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

// project imports
import { useMovieDetails } from 'services/movies';
import MovieBanner from './MovieBanner';
import MovieContent from './MovieContent';
import MovieCredits from './MovieCredits';
import MovieMetadata from './MovieMetadata';
import MovieProfile from './MovieProfile';
import MovieReviews from './MovieReviews';
import MovieCollection from './MovieCollection';
import MoviePhotos from './MoviePhotos';
import MovieInfo from './MovieInfo';

const BREAK_POINT = 'md';

const MovieDetails = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up(BREAK_POINT));
  const isDesktop = matchUpMd;

  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(id);

  if (isLoading) return null;

  console.log('movie', movie);

  if (isDesktop) {
    return (
      <Box>
        <MovieBanner {...movie} />
        <Container maxWidth="xl">
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ mt: 2 }}>
            <Box gridColumn="span 4">
              <Stack spacing={2}>
                <MovieInfo movie={movie} />
                <MovieCredits credits={movie.credits} />
                <MovieCollection collection={movie.belongs_to_collection} />
                <MoviePhotos movie={movie} />
              </Stack>
            </Box>
            <Box gridColumn="span 8">
              <Stack spacing={2}>
                <MovieMetadata {...movie} />
                <MovieReviews reviews={movie.reviews} />
                <MovieContent movie={movie} />
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      <MovieBanner {...movie} />
      <Box sx={{ px: 2 }}>
        <MovieMetadata {...movie} />
      </Box>
      <MovieProfile movie={movie} />
      <MovieCredits credits={movie.credits} />
      <MovieReviews reviews={movie.reviews} />
      <MovieContent movie={movie} />
    </Stack>
  );
};

export default MovieDetails;
