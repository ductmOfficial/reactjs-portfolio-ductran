// material-ui
import Box from '@mui/material/Box';

// third-party
import ReactPlayer from 'react-player';

const ResponsivePlayer = ({ ...props }) => (
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
    <ReactPlayer className="react-player" width="100%" height="100%" {...props} />
  </Box>
);

export default ResponsivePlayer;

ResponsivePlayer.propTypes = {};
