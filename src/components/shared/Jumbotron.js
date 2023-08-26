import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Jumbotron = (props) => {
  const { title, ...restProps } = props;

  return (
    <Box as={Paper} elevation={0} {...restProps} sx={{ px: 4, py: 6 }}>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography gutterBottom>
        It uses utility classes for typography and spacing to space content out within the larger container.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="/details/961323">
          Learn more
        </Button>
        <Button variant="outlined" href="/style-guide">
          Style Guide
        </Button>
      </Stack>
    </Box>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  title: PropTypes.string,
};

Jumbotron.defaultProps = {
  title: 'Hello, world!',
};
