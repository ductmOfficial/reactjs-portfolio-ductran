// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';
import { CelebCard } from 'components/celeb';
import { gridSpacing } from 'constants/theme';
import { TCredits } from 'types';

const MovieCredits = ({ cast = [] }) => {
  const castOnTop = cast.filter((_, index) => index < 5);
  const restCast = cast.filter((_, index) => index >= 5);

  return (
    <MainCard title="Top Casts">
      <Box>
        <Grid container spacing={{ xs: gridSpacing('small'), sm: gridSpacing() }}>
          {castOnTop.map((castItem) => (
            <Grid key={castItem.id} item xs={12}>
              <CelebCard {...castItem} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography sx={{ color: 'text.secondary', mt: 2 }}>
        {restCast.map((castItem, index, list) => (
          <Link key={castItem.id} underline="none" color="inherit" variant="body2">
            {castItem.name}
            {index !== list.length - 1 ? ' • ' : ''}
          </Link>
        ))}
      </Typography>
    </MainCard>
  );
};

export default MovieCredits;

MovieCredits.propTypes = TCredits;
