import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

const MovieHero = ({ ...props }) => (
  <Box>
    <Box sx={{ height: 300, position: 'relative' }}>
      <Box
        sx={{
          height: 200,
          position: 'relative',
          backgroundImage: `url(${generateImageUrl('banner', props.backdrop_path)})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Backdrop />
      </Box>
      <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
        <Box
          component="img"
          src={generateImageUrl('banner', props.poster_path)}
          sx={{
            width: 200,
            height: 200,
            objectFit: 'cover',
            borderRadius: '50%',
            border: ({ palette }) => `4px solid ${palette.background.default}`,
          }}
        />
      </Box>
    </Box>
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ color: 'success.main' }}>
        {`${(props.vote_average * 10).toFixed(0)}%`} User Score
      </Typography>
      <Typography variant="h1">{props.title}</Typography>

      <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
        <Typography variant="h4" color="inherit" sx={{ fontWeight: 'normal' }}>
          {dayjs(props.release_date).get('year')}
        </Typography>
        <Label sx={{ color: 'common.black' }}>PG-13</Label>
        <Typography variant="h4" color="inherit" sx={{ fontWeight: 'normal' }}>{`${props.runtime}m`}</Typography>
        <Label sx={{ color: 'common.black' }}>HD</Label>
      </Stack>

      <Typography sx={{ my: 2 }}>{props.overview}</Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
        <Button variant="contained" color="primary" startIcon={<IconPlayerPlay stroke={1.5} />}>
          Play
        </Button>
        <IconButton sx={{ color: 'primary.main', borderColor: 'primary.main', border: '1px solid' }}>
          <IconPlus stroke={1.5} />
        </IconButton>
        <IconButton sx={{ color: 'primary.main', borderColor: 'primary.main', border: '1px solid' }}>
          <IconThumbUp stroke={1.5} />
        </IconButton>
      </Stack>
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

export default MovieHero;

MovieHero.propTypes = TMovieDetails;

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  sx: PropTypes.object,
};

Backdrop.propTypes = {
  opacity: PropTypes.number,
};
