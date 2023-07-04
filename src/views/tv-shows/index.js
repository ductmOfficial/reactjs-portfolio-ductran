// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// project imports
import { Jumbotron } from 'components/shared';

const TvShows = () => (
  <Box component="section" sx={{ py: 2 }}>
    <Container>
      <Jumbotron title="TV Shows" />
    </Container>
  </Box>
);

export default TvShows;
