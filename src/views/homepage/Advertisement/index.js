import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// project imports
import config from 'config';
import sr from 'lib/sr';

const Advertisement = () => {
  const revealTitle = useRef(null);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
  }, [srConfig]);

  return (
    <Box
      component="section"
      id="advertisement"
      sx={{
        bgcolor: 'primary.light',
        color: 'common.white',
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Box ref={revealTitle} maxWidth={720} margin="0 auto" textAlign="center">
          <Typography component="h2" variant="h1" fontWeight="bold" gutterBottom>
            I’m always available for Freelancer Work.
          </Typography>
          <Typography variant="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Advertisement;
