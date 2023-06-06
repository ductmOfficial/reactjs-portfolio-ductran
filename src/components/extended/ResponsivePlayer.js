import { useState } from 'react';

// material-ui
import Box from '@mui/material/Box';

// third-party
import ReactPlayer from 'react-player';
import { Waypoint } from 'react-waypoint';

const ResponsivePlayer = ({ ...props }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <Waypoint onEnter={() => setPlaying(false)} onLeave={() => setPlaying(false)}>
      <Box
        component="div"
        sx={{
          position: 'relative',
          paddingTop: '56.25%',
          '.react-player': {
            position: 'absolute',
            top: 0,
            left: 0,
          },
        }}
      >
        <ReactPlayer className="react-player" width="100%" height="100%" playing={playing} controls={false} {...props} />
      </Box>
    </Waypoint>
  );
};

export default ResponsivePlayer;

ResponsivePlayer.propTypes = {};
