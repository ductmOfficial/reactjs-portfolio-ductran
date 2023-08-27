// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Hero = () => (
  <Box component="section" id="hero" sx={{ bgcolor: 'background.paper', py: 8 }}>
    <Container maxWidth="xl">
      <Box maxWidth={1000}>
        <Typography color="primary.main">Hi, my name is</Typography>
        <Typography variant="largeHeading" component="h2" color="text.primary">
          Khue Nguyen
        </Typography>
        <Typography variant="mediumHeading" component="h2" color="text.secondary" gutterBottom>
          I guarantee the quality for web.
        </Typography>
        <Box maxWidth={600}>
          <Typography variant="lead">
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m
            focused on building accessible, human-centered products at Upstatement.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button size="large" variant="outlined">
            Hire me now
          </Button>
          <Button size="large" variant="contained">
            Download CV
          </Button>
        </Stack>
      </Box>
    </Container>
  </Box>
);

export default Hero;
