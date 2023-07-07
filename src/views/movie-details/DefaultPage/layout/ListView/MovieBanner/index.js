import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

// third-party
import { IconPlayerPlay, IconPlus, IconThumbUp } from '@tabler/icons';
import dayjs from 'dayjs';

// project imports
import { TMovieDetails } from 'types';
import { generateImageUrl } from 'utils/movie';

const MovieBanner = ({ ...props }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      backgroundImage: `url(${generateImageUrl('banner', props.backdrop_path)})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: (theme) => theme.spacing(8, 0),
    }}
  >
    <Backdrop />
    <Box sx={{ flex: '1 1', position: 'relative' }}>
      <Box sx={{ display: 'flex', gap: 2, color: 'common.white' }}>
        <Container maxWidth="xl">
          <Box>
            <Typography variant="h4" sx={{ color: 'success.main' }}>
              {`${(props.vote_average * 10).toFixed(0)}%`} User Score
            </Typography>
            <Typography variant="h1" color="inherit" sx={{ fontWeight: 'normal' }}>
              {props.title}
            </Typography>

            <Stack direction="row" spacing={1}>
              <Typography variant="h4" color="inherit" sx={{ fontWeight: 'normal' }}>
                {dayjs(props.release_date).get('year')}
              </Typography>
              <Label sx={{ color: 'common.white' }}>PG-13</Label>
              <Typography variant="h4" color="inherit" sx={{ fontWeight: 'normal' }}>{`${props.runtime}m`}</Typography>
              <Label sx={{ color: 'common.white' }}>HD</Label>
            </Stack>

            <Typography variant="h4" sx={{ fontWeight: 'normal', color: 'inherit', mt: 2 }}>
              {props.overview}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" startIcon={<IconPlayerPlay stroke={1.5} />}>
                Play
              </Button>
              <IconButton sx={{ color: 'common.white', borderColor: 'common.white', border: '1px solid' }}>
                <IconPlus stroke={1.5} />
              </IconButton>
              <IconButton sx={{ color: 'common.white', borderColor: 'common.white', border: '1px solid' }}>
                <IconThumbUp stroke={1.5} />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  </Box>
);

const Backdrop = ({ opacity = 0.7 }) => (
  <Box
    sx={{
      width: 1,
      height: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      bgcolor: (theme) => alpha(theme.palette.common.black, opacity),
    }}
  />
);

const Label = ({ children, ...props }) => {
  const borderColor = props.color || props.sx?.color;

  return (
    <Typography
      component="span"
      {...props}
      sx={{
        borderColor,
        border: '1px solid',
        p: (theme) => theme.spacing(0.25, 0.5),
        ...props.sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default MovieBanner;

MovieBanner.propTypes = TMovieDetails;

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  sx: PropTypes.object,
};

Backdrop.propTypes = {
  opacity: PropTypes.number,
};
