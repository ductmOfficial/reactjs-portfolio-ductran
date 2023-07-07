import PropTypes from 'prop-types';

// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Statistic = ({ variant, ...props }) => {
  switch (variant) {
    case 'default':
      return <Instance1 {...props} />;
    case 'iv1':
      return <Instance1 {...props} />;
    case 'iv2':
      return <Instance2 {...props} />;
    default:
      return <Instance1 {...props} />;
  }
};

const Instance1 = ({ icon, primary, secondary }) => (
  <Card elevation={0}>
    <CardContent>
      <Grid container columnSpacing={1} alignItems="center">
        <Grid item xs>
          <Typography variant="h2">{secondary}</Typography>
          <Typography color="text.secondary">{primary}</Typography>
        </Grid>
        <Grid item zeroMinWidth>
          {icon}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const Instance2 = ({ icon, primary, secondary }) => (
  <Card elevation={0}>
    <CardContent>
      <Grid container columnSpacing={1} alignItems="center">
        <Grid item zeroMinWidth>
          {icon}
        </Grid>
        <Grid item xs sx={{ textAlign: 'right' }}>
          <Typography variant="h2">{secondary}</Typography>
          <Typography color="text.secondary">{primary}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Statistic;

const TStatistic = {
  primary: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Statistic.propTypes = {
  variant: PropTypes.string,
};

Instance1.propTypes = TStatistic;
Instance2.propTypes = TStatistic;
