// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Hero = () => (
  <Box component="section" id="hero" sx={{ py: 1 }}>
    <Box sx={{ bgcolor: 'common.white', py: 8 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box maxWidth={720}>
            <Typography color="text.secondary">Hi, my name is</Typography>
            <Typography variant="h1" color="primary.main" fontWeight={600}>
              Douglas Tran
            </Typography>
            <Typography variant="h1" color="text.secondary" fontWeight={300}>
              I guarantee the quality for web
            </Typography>
            <Typography>
              I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m
              focused on building accessible, human-centered products at Upstatement.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button size="large" variant="outlined">
                Hire me now
              </Button>
              <Button size="large" variant="contained">
                Download CV
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <Box
              alt="avatar"
              component="img"
              src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/270119985_2109344799219883_8385049583524957214_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nfr-rbqmBqEAX9VNNfJ&_nc_ht=scontent.fsgn12-1.fna&oh=00_AfAVlmPWdXPbaYuWbZpUcgOg2wAhbXnn_n2bHrjyiyAIWA&oe=64EF81A3"
              sx={{ objectFit: 'cover', width: { xs: 1, lg: 480 }, height: { xs: 1, lg: 480 } }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);

export default Hero;
