import PropTypes from 'prop-types';

// material-ui
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// third-party
import _ from 'lodash';
import { IconPlayerPlay } from '@tabler/icons';

const MediaCard = ({ width, ...props }) => {
  const backdrop = _.get(props, 'backdrop_path', '')
    ? `https://image.tmdb.org/t/p/w500${_.get(props, 'backdrop_path', '')}`
    : 'https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/448/5071/no-image__13489.1665668163.jpg?c=2';

  return (
    <Card elevation={0} sx={{ border: ({ palette }) => `1px solid ${palette.divider}` }}>
      <CardMedia sx={{ height: (width * 9) / 16 }} image={backdrop} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" noWrap component="div">
          {_.get(props, 'title', '')}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton sx={{ bgcolor: 'primary.main', color: 'common.white' }} href={`/details/${props.id}`}>
          <IconPlayerPlay />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MediaCard;

MediaCard.propTypes = {
  id: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
  ]),
};
