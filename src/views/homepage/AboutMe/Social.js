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
              <IconButton
                size="small"
                color="inherit"
                target="_blank"
                href={profile.social.facebook}
                sx={{
                  color: 'common.white',
                  bgcolor: 'primary.light',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <IconBrandFacebook stroke={1.5} size="1.5rem" />
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                target="_blank"
                href={profile.social.linkedin}
                sx={{
                  color: 'common.white',
                  bgcolor: 'primary.light',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <IconBrandLinkedin stroke={1.5} size="1.5rem" />
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                target="_blank"
                href={profile.social.instagram}
                sx={{
                  color: 'common.white',
                  bgcolor: 'primary.light',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <IconBrandInstagram stroke={1.5} size="1.5rem" />
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                href={`skype:${profile.social.skype}?chat`}
                sx={{
                  color: 'common.white',
                  bgcolor: 'primary.light',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                <IconBrandSkype stroke={1.5} size="1.5rem" />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;
