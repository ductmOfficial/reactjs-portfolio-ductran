import React from 'react';

// material-ui
import Stack from '@mui/material/Stack';

// third-party
import _ from 'lodash';

// project imports
import Genre from './Genre';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const components = {
  trending: React.lazy(() => import('./Trending')),
  nowPlaying: React.lazy(() => import('./NowPlaying')),
  upcoming: React.lazy(() => import('./Upcoming')),
  latest: React.lazy(() => import('./Latest')),
  popular: React.lazy(() => import('./Popular')),
  topRated: React.lazy(() => import('./TopRated')),
};

const Movies = () => {
  const chunkedGenres = _.chain(genres).shuffle().take(10).chunk(1).value();
  const staticSections = _.chain(components).values().value();

  return (
    <Stack spacing={5}>
      {chunkedGenres.map((grouped, index) => {
        const Component = staticSections[index] || React.Fragment;

        return (
          <React.Fragment key={`grouped[${index}]`}>
            <Component />

            {grouped.map(({ id, name }) => (
              <Genre key={`genre[${id}]`} id={id} title={name} />
            ))}
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

export default Movies;
