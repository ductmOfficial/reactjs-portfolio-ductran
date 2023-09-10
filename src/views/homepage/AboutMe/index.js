import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// project imports
import config from 'config';
import sr from 'lib/sr';
import Pic from './Pic';
import Social from './Social';

// assets
import ImageAvatar from 'assets/images/avatar.jpeg';

const AboutMe = () => {
  const revealContainer = useRef(null);
  const { srConfig } = config;

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, [srConfig]);

  return (
    <Box ref={revealContainer} component="section" id="about-me" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={{ xs: 0, lg: 4 }}>
            <Grid item xs={12} lg={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, lg: 0 } }}>
                <Pic maxWidth={{ xs: 280, sm: 'calc(100% - 50px)' }}>
                  <Box component="div" className="wrapper">
                    <img src={ImageAvatar} alt="Avatar" className="img" />
                  </Box>
                </Pic>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={{ textAlign: { lg: 'right' } }}>
                <Typography variant="numberedHeading" component="h2" gutterBottom color="text.secondary">
                  About me
                </Typography>
                <Typography gutterBottom>Hello! I’m Duc, a software engineer based in Ho Chi Minh, VN.</Typography>
                <Typography gutterBottom>
                  I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal
                  is to always build products that provide pixel-perfect, performant experiences.
                </Typography>
                <Typography gutterBottom>
                  Shortly after graduating from{' '}
                  <Link href="https://www.sgu.edu.vn/" target="_blank" underline="none">
                    Sai Gon University
                  </Link>
                  , I joined the engineering team at{' '}
                  <Link href="https://imad.com.vn/" target="_blank" underline="none">
                    IMAD Technology
                  </Link>{' '}
                  where I work on a wide variety of interesting and meaningful projects on a daily basis.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs>
              <Social />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
