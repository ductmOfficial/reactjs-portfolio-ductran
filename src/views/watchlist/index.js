// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// project imports
import { Jumbotron } from 'components/shared';

const Watch = () => (
  <Box component="section" sx={{ py: 2 }}>
    <Container>
      <Jumbotron title="Watch" />
    </Container>
  </Box>
);

export default Watch;
