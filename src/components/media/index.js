// material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// project imports
import { TMovie } from 'types';
import { generateImageUrl } from 'utils/movie';
import { Media, MediaBody, MediaImage, TypographyTruncator } from '../shared';

const MediaCard = ({ ...props }) => (
  <Media>
    <MediaImage width={{ xs: 150, sm: 200 }}>
      <Box component="img" src={generateImageUrl('backdrop', props.backdrop_path)} sx={{ maxWidth: 1 }} />
    </MediaImage>
    <MediaBody>
      <Typography variant="h5" sx={{ color: 'success.main' }}>
        {`${(props.vote_average * 10).toFixed(0)}%`} User Score
      </Typography>
      <Typography variant="h5">{props.title}</Typography>
      <TypographyTruncator content={props.overview} options={{ length: 300 }} />
    </MediaBody>
  </Media>
);

export default MediaCard;

MediaCard.propTypes = TMovie;
