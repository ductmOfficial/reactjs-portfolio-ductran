import { useEffect, useRef } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import { IconBrandFacebook } from '@tabler/icons-react';

// project imports
import config from 'config';
import sr from 'lib/sr';
import { formatPhoneNumber } from 'utils/number';

const Social = () => {
  const revealContainer = useRef(null);
  const { userProfile: profile = {}, srConfig, socialMedia } = config;

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
          display: { xs: 'none', lg: 'block' },
          visibility: 'hidden',
        }}
      >
        About me
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={12}>
          <Box>
            <Typography variant="h5" component="p">
              Phone
            </Typography>
            <Typography color="text.secondary">{formatPhoneNumber(profile.phoneNumber)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <Box>
            <Typography variant="h5" component="p">
              Location
            </Typography>
            <Typography color="text.secondary">{`${profile.address.city}, ${profile.address.country}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <Box>
            <Typography variant="h5" component="p">
              Skype
            </Typography>
            <Typography color="text.secondary">{profile.social.skype}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <Box>
            <Typography variant="h5" component="p">
              Email
            </Typography>
            <Typography color="text.secondary">{profile.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={12}>
          <Box>
            <Typography variant="h5" gutterBottom>
              You can follow me also here
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
              {socialMedia &&
                socialMedia.map(({ url, name, icon }) => {
                  const Icon = icon;
                  return (
                    <Box key={`${url}`}>
                      <IconButton
                        size="small"
                        href={url}
                        target="_blank"
                        aria-label={name}
                        sx={{
                          color: 'common.white',
                          bgcolor: 'secondary.main',
                          '&:hover': {
                            color: 'secondary.main',
                          },
                        }}
                      >
                        <Icon stroke={1.5} size="1.3rem" />
                      </IconButton>
                    </Box>
                  );
                })}
            </Stack>
            <Stack direction="row" spacing={1} sx={{ display: 'none' }}>
              <IconButton
                color="inherit"
                target="_blank"
                href={profile.social.facebook}
                sx={{
                  color: 'common.white',
                  bgcolor: 'secondary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <IconBrandFacebook stroke={1.5} size="1.5rem" />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;
