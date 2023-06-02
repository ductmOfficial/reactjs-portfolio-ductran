// material-ui
import Box from '@mui/material/Box';

// third-party
import shuffle from 'lodash/shuffle';

// project imports
import MainCard from 'components/MainCard';
import ResponsivePlayer from 'components/ResponsivePlayer';

// assets
import React from 'react';
import data from './fixture.json';

const MovieContent = () => {
  const [officialTrailer, ...trailers] = data.map(({ id, key, name }) => (
    <MainCard key={id} title={`Trailer: ${name}`}>
      <ResponsivePlayer url={`https://www.youtube.com/watch?v=${key}`} />
    </MainCard>
  ));

  const nodes = shuffle([
    ...trailers,
    <MainCard title="Similar Movies">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>,
    <MainCard title="Similar Movies">
      <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
    </MainCard>,
  ]);

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      {officialTrailer}

      {nodes.map((node, index) => (
        <React.Fragment key={`node[${index}]`}>{node}</React.Fragment>
      ))}

      <MainCard title="Recommedation for YOU">
        <Box sx={{ p: 2, bgcolor: 'background.default', minHeight: 220 }} />
      </MainCard>
    </Box>
  );
};

export default MovieContent;

MovieContent.propTypes = {};
