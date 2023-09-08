import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandSkype } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';
import { formatPhoneNumber } from 'utils/number';

const Social = () => {
  const revealContainer = useRef(null);
  const { userProfile: profile = {}, srConfig } = config;

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, [srConfig]);

  return (
    <Box>
      <Typography
        gutterBottom
        component="h2"
        color="text.secondary"
        variant="numberedHeading"
        sx={{
          visibility: 'hidden',
        }}
      >
        About me
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" component="p">
              Phone
            </Typography>
            <Typography color="text.secondary">{formatPhoneNumber(profile.phoneNumber)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" component="p">
              Location
            </Typography>
            <Typography color="text.secondary">{`${profile.address.city}, ${profile.address.country}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" component="p">
              Skype
            </Typography>
            <Typography color="text.secondary">{profile.social.skype}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" component="p">
              Email
            </Typography>
            <Typography color="text.secondary">{profile.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" gutterBottom>
              You can follow me also here:
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" href={profile.social.facebook} target="_blank" sx={{ bgcolor: 'background.default' }}>
                <IconBrandFacebook stroke={1.3} size="1.5rem" />
              </IconButton>
              <IconButton color="primary" href={profile.social.linkedin} target="_blank" sx={{ bgcolor: 'background.default' }}>
                <IconBrandLinkedin stroke={1.3} size="1.5rem" />
              </IconButton>
              <IconButton color="primary" href={profile.social.instagram} target="_blank" sx={{ bgcolor: 'background.default' }}>
                <IconBrandInstagram stroke={1.3} size="1.5rem" />
              </IconButton>
              <IconButton color="primary" href={`skype:${profile.social.skype}?chat`} sx={{ bgcolor: 'background.default' }}>
                <IconBrandSkype stroke={1.3} size="1.5rem" />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;
