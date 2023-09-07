import Side from 'components/Side';

// material-ui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// project imports
import config from 'config';

const Email = () => {
  const { userProfile } = config;

  return (
    <Side orientation="right">
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

Email.propTypes = {};
