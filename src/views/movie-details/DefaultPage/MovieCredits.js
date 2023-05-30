import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

// project imports
import MainCard from 'components/MainCard';

const MovieCredits = ({ credits, ...props }) => {
  const castOnTop = credits.cast.filter((_, index) => index < 8);
  const restCast = credits.cast.filter((_, index) => index >= 8);

  return (
    <MainCard title="Top Casts" {...props}>
      <Box>
        <Grid container spacing={2}>
          {castOnTop.map((castItem) => (
            <Grid key={castItem.id} item xs={6}>
              <CastCard {...castItem} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography sx={{ color: 'text.secondary', mt: 2 }}>
        {restCast.map((castItem, index, list) => (
          <Link key={castItem.id} underline="none" color="inherit">
            {castItem.name}
            {index !== list.length - 1 ? ' • ' : ''}
          </Link>
        ))}
      </Typography>
    </MainCard>
  );
};

const CARD_HEIGHT = 56;

const CastCard = ({ ...props }) => (
  <Box sx={{ bgcolor: 'background.default', borderRadius: `${CARD_HEIGHT}px` }}>
    <Box display="flex" alignItems="center" gap={1} py={1} pr={1}>
      <Avatar
        alt={props.name}
        src={`https://www.themoviedb.org/t/p/w276_and_h350_face${props.profile_path}`}
        sx={{ width: CARD_HEIGHT, height: CARD_HEIGHT }}
      />
      <Box>
        <Typography variant="h5">{props.name}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{props.character}</Typography>
      </Box>
    </Box>
  </Box>
);

export default MovieCredits;

MovieCredits.propTypes = {
  credits: PropTypes.shape({
    cast: PropTypes.array,
  }),
};

MovieCredits.defaultProps = {
  credits: {
    cast: [],
    crew: [],
  },
};

CastCard.propTypes = {
  adult: PropTypes.bool,
  gender: PropTypes.number,
  id: PropTypes.number,
  known_for_department: PropTypes.string,
  name: PropTypes.string,
  original_name: PropTypes.string,
  popularity: PropTypes.number,
  profile_path: PropTypes.string,
  cast_id: PropTypes.number,
  character: PropTypes.string,
  credit_id: PropTypes.string,
  order: PropTypes.number,
};
