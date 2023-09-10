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
    <Box component="section" id="get-in-touch" sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="xl">
        <Box ref={revealContainer} maxWidth={600} margin="0 auto" textAlign="center">
          <Typography variant="numberedHeading" component="h2" gutterBottom color="text.secondary">
            Get In Touch
          </Typography>
          <Typography variant="lead" component="p" mb={4}>
            Although I’m not currently seeking new opportunities, but I’m always happy to connect with people. Please feel free to reach out
            if you have any questions or just want to say hello.
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
