import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';

const Hero = ({ fullHeight = false }) => {
  const { userProfile: profile = {} } = config;

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        bgcolor: 'background.paper',
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Box margin="0 auto">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ...(fullHeight && {
                minHeight: { lg: 'calc(100vh - 180px)' },
              }),
            }}
          >
            <Box flex={1}>
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
                  I’m a software developer based in Ho Chi Minh City, Vietnam that specializes in developing (and occasionally designing)
                  amazing websites, applications, and everything in between.
                </Typography>
              </Box>
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <Button
                  size="large"
                  target="_blank"
                  variant="contained"
                  href={`mailto:${profile.email}?subject=An amazing job opportunity inside!`}
                >
                  Hire me now
                </Button>
                <Button size="large" variant="outlined" target="_blank" href="/resume.pdf" aria-label="download cv">
                  Download CV
                </Button>
              </Stack>
            </Box>
            <Box sx={{ color: 'primary.main' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

Hero.propTypes = {
  fullHeight: PropTypes.bool,
};
