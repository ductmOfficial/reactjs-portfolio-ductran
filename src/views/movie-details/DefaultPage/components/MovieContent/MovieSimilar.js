import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// third-party
import chunk from 'lodash/chunk';

// project imports
import MainCard from 'components/MainCard';
import TypographyTruncator from 'components/TypographyTruncator';
import { generateImageUrl } from 'utils/movie';

const PAGING_PER_PAGE = 3;
const PAGING_SIZE_INIT = 0;

const MovieSimilar = ({ movies = [] }) => {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const group = chunk(movies, PAGING_PER_PAGE);
  const [size, setSize] = useState(PAGING_SIZE_INIT);
  const [shownMovies, setShownMovies] = useState(group[PAGING_SIZE_INIT]);

  const handleMore = () => {
    const nextSize = size + 1;
    const nextComments = group[nextSize] || [];

    setSize(nextSize);
    setShownMovies((prev) => [...prev, ...nextComments]);
  };

  if (!movies || !movies.length) return null;

  return (
    <MainCard title="Similar Movies">
      <MediaObject dividers>
        {shownMovies.map((movie, index) => (
          <Media key={index}>
            <MediaImage width={{ xs: 150, sm: 200 }}>
              <Box component="img" src={generateImageUrl('backdrop', movie.backdrop_path)} sx={{ maxWidth: 1 }} />
            </MediaImage>
            <MediaBody>
              <Typography variant="h5" sx={{ color: 'success.main' }}>
                {`${(movie.vote_average * 10).toFixed(0)}%`} User Score
              </Typography>
              <Typography variant={matchUpSm ? 'h3' : 'h5'}>{movie.title}</Typography>
              <TypographyTruncator content={movie.overview} options={{ length: matchUpSm ? 300 : 100 }} />
            </MediaBody>
          </Media>
        ))}

        {movies.length > PAGING_PER_PAGE && (
          <Box display="flex">
            {shownMovies.length < movies.length && (
              <Link noWrap underline="none" component="button" sx={{ verticalAlign: 'unset' }} onClick={handleMore}>
                View more movies
              </Link>
            )}
            <Box flexGrow={1} />
            <Typography sx={{ color: 'text.secondary' }}>
              {shownMovies.length} of {movies.length}
            </Typography>
          </Box>
        )}
      </MediaObject>
    </MainCard>
  );
};

const MediaObject = styled(({ dividers, ...props }) => (
  <Box
    display="flex"
    flexDirection="column"
    {...props}
    sx={{
      '> div': { pb: 1, mb: 1 },
      '> div:last-child': { pb: 0, mb: 0 },
      ...(dividers && { '> div:not(:last-child)': { borderBottom: ({ palette }) => `1px solid ${palette.divider}` } }),
      ...props.sx,
    }}
  />
))(() => ({}));
const Media = styled((props) => <Box display="flex" flexDirection="row" gap={1} {...props} />)(() => ({}));
const MediaImage = styled((props) => <Box flex="0 0 auto" width="30%" {...props} />)(() => ({}));
const MediaBody = styled((props) => <Box flex="1 1" {...props} />)(() => ({}));

export default MovieSimilar;

MovieSimilar.propTypes = {
  movies: PropTypes.array,
};
