// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// project imports
import { Jumbotron } from 'components/shared';

const Watchlist = () => (
  <Box component="section" sx={{ py: 2 }}>
    <Container maxWidth="xl">
      <Jumbotron title="Watchlist" />
    </Container>
  </Box>
);

export default Watchlist;
