// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';

const Hero = () => {
  const { userProfile: profile = {} } = config;

  return (
    <Box component="section" id="hero" sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="xl">
        <Box maxWidth={1000}>
          <Typography
            sx={{
              fontFamily: 'monospace',
              color: 'primary.main',
            }}
          >
            Hi, my name is
          </Typography>
          <Typography variant="largeHeading" component="h2" color="text.secondary">
            {`${profile.firstName} ${profile.lastName}`}
          </Typography>
          <Typography variant="mediumHeading" component="h2" gutterBottom>
            I build things for the web.
          </Typography>
          <Box maxWidth={600}>
            <Typography variant="lead">
              I’m a software engineer based in Ho Chi Minh, VN specializing in building (and occasionally designing) exceptional websites,
              applications, and everything in between.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              size="large"
              target="_blank"
              variant="outlined"
              href={`mailto:${profile.email}?subject=An amazing job opportunity inside!`}
            >
              Hire me now
            </Button>
            <Button size="large" variant="outlined" target="_blank" href="/resume.pdf" aria-label="download cv">
              Download CV
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
