// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const GetInTouch = () => (
  <Box component="section" id="get-in-touch" sx={{ bgcolor: 'background.paper', py: 8 }}>
    <Container maxWidth="xl">
      <Box maxWidth={720} margin="0 auto" textAlign="center">
        <Typography variant="numberedHeading" component="h2">
          Get In Touch
        </Typography>
        <Typography variant="lead" component="p" mb={2}>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </Typography>
        <Button variant="contained" size="large">
          Say Hello
        </Button>
      </Box>
    </Container>
  </Box>
);

export default GetInTouch;
