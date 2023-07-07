import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third-party
import chunk from 'lodash/chunk';

// project imports
import { Divider, List, ListItem } from '@mui/material';
import { MediaCard } from 'components/media';

const PAGING_PER_PAGE = 3;
const PAGING_SIZE_INIT = 0;

const MovieSimilar = ({ movies = [] }) => {
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
    <Card elevation={0} sx={{ borderRadius: { xs: 0, lg: 1 } }}>
      <CardHeader title="Similar Movies" titleTypographyProps={{ variant: 'h6' }} />
      <CardContent sx={{ pt: 0 }}>
        <List disablePadding>
          {shownMovies.map((movie, index, list) => (
            <React.Fragment key={`${movie.id}.${index}`}>
              <ListItem disableGutters>
                <MediaCard {...movie} />
              </ListItem>
              {index !== list.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
        {movies.length > PAGING_PER_PAGE && (
          <Box display="flex">
            {shownMovies.length < movies.length && (
              <Link noWrap underline="none" component="button" sx={{ verticalAlign: 'unset' }} onClick={handleMore}>
                View more movies
              </Link>
            )}
            <Box flexGrow={1} />
            <Typography color="text.secondary">
              {shownMovies.length} of {movies.length}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieSimilar;

MovieSimilar.propTypes = {
  movies: PropTypes.array,
};
