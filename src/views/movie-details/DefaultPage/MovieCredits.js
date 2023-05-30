// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports

const MovieCredits = () => (
  <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
    <Typography variant="h3" sx={{ mb: 2 }}>
      Top Casts
    </Typography>

    <Box>
      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, item) => (
          <Grid key={`cast[${item}]`} item xs={6}>
            <Box sx={{ p: 2, bgcolor: 'grey.300', minHeight: 55 }}>Tom Cruise</Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Typography sx={{ color: 'text.secondary', mt: 2 }}>
      {Array.from({ length: 8 })
        .map(() => 'Tom Cruise')
        .join(', ')}
    </Typography>
  </Box>
);

export default MovieCredits;

MovieCredits.propTypes = {};
