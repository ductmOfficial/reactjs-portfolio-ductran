import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third-party
import chunk from 'lodash/chunk';

// project imports
import MainCard from 'components/MainCard';
import MediaCard from 'components/media';
import { MediaObject } from 'components/shared';

const PAGING_PER_PAGE = 10;
const PAGING_SIZE_INIT = 0;

const MovieRecommendation = ({ movies = [] }) => {
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
    <MainCard title="Recommendation">
      <MediaObject dividers>
        {shownMovies.map((movie, index) => (
          <MediaCard key={index} {...movie} />
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

export default MovieRecommendation;

MovieRecommendation.propTypes = {
  movies: PropTypes.array,
};
