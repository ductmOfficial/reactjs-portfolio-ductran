// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// project imports
import { Jumbotron } from 'components/shared';
import { useMovieSections } from 'services/pages';

const Movies = () => {
  const { data = [] } = useMovieSections();

  return (
    <Box component="section" sx={{ py: 2 }}>
      <Container maxWidth="xl">
        <Jumbotron title="Movies" />
        {data.map((item) => (
          <Box key={item.id} component="section" sx={{ my: 4 }}>
            <Typography variant="h3" gutterBottom>
              {item.name}
            </Typography>
            <Box component={Paper} elevation={0} sx={{ minHeight: 100, p: 2 }}>
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Movies;
