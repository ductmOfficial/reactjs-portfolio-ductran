// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// project imports
import { Jumbotron } from 'components/shared';

const Movies = () => (
  <Box component="section" sx={{ py: 2 }}>
    <Container>
      <Jumbotron title="Movies" />
    </Container>
  </Box>
);

export default Movies;
