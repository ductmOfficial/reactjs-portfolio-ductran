import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Jumbotron = ({ title, ...props }) => (
  <Box as={Paper} elevation={0} {...props} sx={{ px: 4, py: 6 }}>
    <Typography variant="h2" component="h1">
      {title}
    </Typography>
    <Typography variant="h5" component="p">
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography gutterBottom>
      It uses utility classes for typography and spacing to space content out within the larger container.
    </Typography>
    <Button variant="contained" href="/details/961323">
      Learn more
    </Button>
  </Box>
);

export default Jumbotron;

Jumbotron.propTypes = {
  title: PropTypes.string,
};

Jumbotron.defaultProps = {
  title: 'Hello, world!',
};
