// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';
import { StyledAvatar } from 'components/mui-extended';
import { borderRadius, gridSpacing } from 'constants/theme';
import { TCast, TCredits } from 'types';
import { generateImageUrl } from 'utils/movie';

const MovieCredits = ({ cast = [] }) => {
  const castOnTop = cast.filter((_, index) => index < 8);
  const restCast = cast.filter((_, index) => index >= 8);

  return (
    <MainCard title="Top Casts">
      <Box>
        <Grid container spacing={{ xs: gridSpacing('small'), sm: gridSpacing() }}>
          {castOnTop.map((castItem) => (
            <Grid key={castItem.id} item xs={6} sm={6}>
              <Card {...castItem} />
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

const Card = ({ ...props }) => (
  <Box sx={{ bgcolor: 'background.default', borderRadius: borderRadius(`${CARD_HEIGHT}px`) }}>
    <Box display="flex" alignItems="center" gap={1} pr={1}>
      <StyledAvatar
        alt={props.name}
        src={generateImageUrl('profile', props.profile_path)}
        sx={{ width: CARD_HEIGHT, height: CARD_HEIGHT }}
      />
      <Box>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="caption">{props.character}</Typography>
      </Box>
    </Box>
  </Box>
);

export default MovieCredits;

MovieCredits.propTypes = TCredits;

Card.propTypes = TCast;
