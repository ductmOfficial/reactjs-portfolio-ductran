// material-ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

// third-party
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandSkype } from '@tabler/icons-react';

const AboutMe = () => (
  <Box component="section" id="about-me" sx={{ py: 1 }}>
    <Box component="section" id="about-me" sx={{ py: 8, bgcolor: 'common.white' }}>
      <Box
        display="flex"
        maxWidth={1000}
        margin="0 auto"
        px={{ xs: 2, lg: 0 }}
        gap={{ xs: 2, lg: 4 }}
        flexDirection={{ xs: 'column', lg: 'row' }}
      >
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Box
            alt="avatar"
            component="img"
            src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/270119985_2109344799219883_8385049583524957214_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nfr-rbqmBqEAX9VNNfJ&_nc_ht=scontent.fsgn12-1.fna&oh=00_AfAVlmPWdXPbaYuWbZpUcgOg2wAhbXnn_n2bHrjyiyAIWA&oe=64EF81A3"
            sx={{ objectFit: 'cover', width: { xs: 450, lg: 450 }, height: { xs: 450, lg: 450 }, zIndex: 1 }}
          />
        </Box>
        <Box flex={1}>
          <Typography variant="h2" fontWeight={600} gutterBottom>
            About me
          </Typography>
          <Typography gutterBottom>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot
            about HTML & CSS!
          </Typography>
          <Typography gutterBottom>
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </Typography>
          <Typography gutterBottom>
            I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography variant="h5">Phone</Typography>
                <Typography color="text.secondary">+84 (963) 891 034</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography variant="h5">Email</Typography>
                <Typography color="text.secondary">khuenguyen.official@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography variant="h5">Location</Typography>
                <Typography color="text.secondary">Ho Chi Minh, Vietnam</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  You can follow me also here:
                </Typography>
                <Stack direction="row" spacing={1}>
                  <StyledIconButton color="primary">
                    <IconBrandFacebook stroke={1.5} size="1.3rem" />
                  </StyledIconButton>
                  <StyledIconButton color="primary">
                    <IconBrandLinkedin stroke={1.5} size="1.3rem" />
                  </StyledIconButton>
                  <StyledIconButton color="primary">
                    <IconBrandInstagram stroke={1.5} size="1.3rem" />
                  </StyledIconButton>
                  <StyledIconButton color="primary">
                    <IconBrandSkype stroke={1.5} size="1.3rem" />
                  </StyledIconButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  </Box>
);

const StyledIconButton = styled((props) => (
  <IconButton {...props} sx={{ bgcolor: ({ palette }) => alpha(palette.grey[300], 0.35), ...props.sx }} />
))(() => ({}));

export default AboutMe;
