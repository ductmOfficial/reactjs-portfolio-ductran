import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';
import sr from 'lib/sr';

const GetInTouch = () => {
  const revealContainer = useRef(null);
  const { userProfile: profile = {}, srConfig } = config;

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, [srConfig]);

  return (
    <Box ref={revealContainer} component="section" id="get-in-touch" sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="xl">
        <Box maxWidth={720} margin="0 auto" textAlign="center">
          <Typography variant="numberedHeading" component="h2" gutterBottom color="text.secondary">
            Get In Touch
          </Typography>
          <Typography variant="lead" component="p" mb={4}>
            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want
            to say hi, I’ll try my best to get back to you!
          </Typography>
          <Button
            variant="outlined"
            size="large"
            target="_blank"
            href={`mailto:${profile.email}?subject=An amazing job opportunity inside!`}
          >
            Say Hello
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GetInTouch;
