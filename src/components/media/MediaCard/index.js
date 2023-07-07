// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// project imports
import { TMovie } from 'types';
import { generateImageUrl } from 'utils/movie';
import { TypographyTruncator } from '../../shared';

const NO_IMAGE = 'https://t4.ftcdn.net/jpg/03/24/14/35/360_F_324143588_Jk9uwkSlhuSEyrGWkuQT7MM6mFbCayIj.jpg';

const MediaCard = ({ ...props }) => (
  <Card elevation={0} sx={{ display: 'flex', borderRadius: 0 }}>
    <CardMedia
      component="img"
      sx={{ width: { xs: 150, sm: 200 }, objectFit: 'cover' }}
      image={generateImageUrl('backdrop', props.backdrop_path) || NO_IMAGE}
      alt="Live from space album cover"
    />
    <CardContent sx={{ py: 0 }}>
      <Typography variant="overline" color="success.main">
        {`${(props.vote_average * 10).toFixed(0)}%`} User Score
      </Typography>
      <Typography variant="h5">{props.title}</Typography>
      <TypographyTruncator content={props.overview} options={{ length: 300 }} />
    </CardContent>
  </Card>
);

export default MediaCard;

MediaCard.propTypes = TMovie;
