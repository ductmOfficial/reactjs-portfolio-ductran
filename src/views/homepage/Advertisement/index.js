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
        <Box ref={revealTitle} maxWidth={720} margin="0 auto">
          <Typography component="h2" variant="numberedHeading" fontWeight="bold" align="center" gutterBottom>
            I’m available for{' '}
            <Typography
              component="span"
              sx={{
                color: 'primary.dark',
                fontWeight: 'inherit',
                fontSize: 'inherit',
              }}
            >
              Freelance
            </Typography>
            .
          </Typography>
          <Typography variant="lead" component="p" align="center">
            I work with you to understand your business and your goals, and then I create a website that is both visually appealing and
            functionally effective.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Advertisement;
