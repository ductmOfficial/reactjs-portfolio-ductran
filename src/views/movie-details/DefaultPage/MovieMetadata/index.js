import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// third-party
import { IconFlame, IconHistory, IconStar, IconTrendingUp } from '@tabler/icons';

// project imports
import { formatNumber } from 'utils/number';

const MovieMetadata = ({ ...props }) => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} lg={3}>
          <Card
            title="Rated"
            content={formatNumber(props.vote_count)}
            icon={<IconStar size="3rem" stroke={2} color={theme.palette.warning.main} />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <Card
            title="Popularity"
            content={formatNumber(props.popularity)}
            icon={<IconFlame size="3rem" stroke={2} color={theme.palette.error.main} />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <Card
            title="Runtime"
            content={`${props.runtime}m`}
            icon={<IconHistory size="3rem" stroke={2} color={theme.palette.info.main} />}
          />
        </Grid>
        <Grid item xs={6} lg={3}>
          <Card
            title="Profit"
            content={`${formatNumber(props.popularity)}`}
            icon={<IconTrendingUp size="3rem" stroke={2} color={theme.palette.success.main} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const Card = ({ title, icon, content }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: '6px',
      bgcolor: 'background.paper',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Box>
      <Typography variant="h2">{content}</Typography>
      <Typography>{title}</Typography>
    </Box>
    {icon}
  </Box>
);

export default MovieMetadata;

MovieMetadata.propTypes = {
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  popularity: PropTypes.number,
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
