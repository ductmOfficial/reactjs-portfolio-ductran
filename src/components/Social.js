/**
 *
 * Social
 *
 */

import Side from 'components/Side';

// material-ui
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

// project imports
import config from 'config';

const Social = () => {
  const { socialMedia } = config;

  return (
    <Side orientation="left">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,

          '&:after': {
            content: '""',
            display: 'block',
            width: '1px',
            height: '90px',
            margin: '0 auto',
            backgroundColor: 'text.primary',
            marginTop: '40px',
          },
        }}
      >
        {socialMedia &&
          socialMedia.map(({ url, name, icon }) => {
            const Icon = icon;
            return (
              <Box key={`${url}`}>
                <IconButton href={url} target="_blank" aria-label={name} sx={{ color: 'text.primary' }}>
                  <Icon stroke={1.5} size="1.75rem" />
                </IconButton>
              </Box>
            );
          })}
      </Box>
    </Side>
  );
};

export default Social;

Social.propTypes = {};
