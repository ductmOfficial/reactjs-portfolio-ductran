import { useParams } from 'react-router';

// material-ui
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import { useMovieDetails } from 'services/movies';
import { GridView, ListView } from './layout';

const MovieDetails = () => {
  const theme = useTheme();
  const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(id);
  const Component = matchUpLg ? GridView : ListView;

  return <Component loading={isLoading} movie={movie} />;
};

export default MovieDetails;
