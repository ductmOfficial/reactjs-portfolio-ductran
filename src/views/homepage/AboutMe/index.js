import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandSkype } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';
import Pic from './Pic';

// assets
import ImageAvatar from 'assets/images/avatar.jpeg';
import { formatPhoneNumber } from 'utils/number';

const AboutMe = () => {
  const revealContainer = useRef(null);
  const { userProfile: profile = {}, srConfig } = config;

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, [srConfig]);

  return (
    <Box ref={revealContainer} component="section" id="about-me" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box maxWidth={1000} margin="0 auto">
          <Grid container spacing={{ xs: 0, lg: 4 }}>
            <Grid item xs={12} lg={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, lg: 0 } }}>
                <Pic>
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
                  Shortly after graduating from Sai Gon University, I joined the engineering team at IMAD Technology where I work on a wide
                  variety of interesting and meaningful projects on a daily basis.
                </Typography>

                <Divider sx={{ my: 2 }} />
              </Box>
            </Grid>

            <Grid item xs>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h5">Phone</Typography>
                    <Typography color="text.secondary">{formatPhoneNumber(profile.phoneNumber)}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h5">Email</Typography>
                    <Typography color="text.secondary">{profile.email}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h5">Location</Typography>
                    <Typography color="text.secondary">{`${profile.address.city}, ${profile.address.country}`}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h5">Skype</Typography>
                    <Typography color="text.secondary">{profile.social.skype}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      You can follow me also here:
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton color="primary" href={profile.social.facebook} target="_blank" sx={{ bgcolor: 'background.paper' }}>
                        <IconBrandFacebook stroke={1.5} size="1.3rem" />
                      </IconButton>
                      <IconButton color="primary" href={profile.social.linkedin} target="_blank" sx={{ bgcolor: 'background.paper' }}>
                        <IconBrandLinkedin stroke={1.5} size="1.3rem" />
                      </IconButton>
                      <IconButton color="primary" href={profile.social.instagram} target="_blank" sx={{ bgcolor: 'background.paper' }}>
                        <IconBrandInstagram stroke={1.5} size="1.3rem" />
                      </IconButton>
                      <IconButton color="primary" href={`skype:${profile.social.skype}?chat`} sx={{ bgcolor: 'background.paper' }}>
                        <IconBrandSkype stroke={1.5} size="1.3rem" />
                      </IconButton>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
