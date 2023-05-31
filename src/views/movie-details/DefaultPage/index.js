import { useParams } from 'react-router';

// material-ui
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import { useMovieDetails } from 'services/movies';
import LayoutOnDesktop from './LayoutOnDesktop';
import LayoutOnMobile from './LayoutOnMobile';

const BREAK_POINT = 'md';

const MovieDetails = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up(BREAK_POINT));

  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(id);
  const Component = matchUpMd ? LayoutOnDesktop : LayoutOnMobile;

  return <Component loading={isLoading} movie={movie} />;
};

export default MovieDetails;
