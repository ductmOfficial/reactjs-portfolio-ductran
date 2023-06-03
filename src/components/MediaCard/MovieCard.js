import PropTypes from 'prop-types';

// material-ui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// third-party
import _ from 'lodash';

const MovieCard = ({ id, title, overview, ...item }) => {
  const backdrop = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    : 'https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/448/5071/no-image__13489.1665668163.jpg?c=2';

  return (
    <Card elevation={0}>
      <CardMedia sx={{ height: 180 }} image={backdrop} title="green iguana" />
      <CardContent sx={{ minHeight: 100 }}>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'none' }}>
          {_.truncate(overview, { length: 120 })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" disableElevation href={`/details/${id}`}>
          Play
        </Button>
        <Button variant="outlined" size="small">
          Watch later
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  backdrop_path: PropTypes.string,
};
