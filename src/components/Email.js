/**
 *
 * Social
 *
 */

import Side from 'components/Side';
import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// project imports
import config from 'config';

const Email = ({ isHome }) => {
  const { userProfile } = config;

  return (
    <Side isHome={isHome} orientation="right">
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
        <Link
          variant="body2"
          underline="none"
          href={`mailto:${userProfile.email}`}
          sx={{
            letterSpacing: '0.em',
            writingMode: 'vertical-rl',
            fontFamily: 'monospace',
            color: 'text.primary',
          }}
        >
          {userProfile.email}
        </Link>
      </Box>
    </Side>
  );
};

export default Email;

Email.propTypes = {
  isHome: PropTypes.bool,
};
