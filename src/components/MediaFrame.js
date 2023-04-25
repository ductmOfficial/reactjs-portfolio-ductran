import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports
import MediaCard from 'components/MediaCard';

const MediaFrame = ({ title, path, items }) => {
  if (!items || !items.length) return null;

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h3" gutterBottom sx={{ textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <Box flexGrow={1} />
        <Button size="small" href={path}>
          See more
        </Button>
      </Box>

      <Box>
        <Grid container spacing={2}>
          {items
            .filter((_, index) => index < 6)
            .map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={2}>
                <MediaCard {...item} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MediaFrame;

MediaFrame.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  items: PropTypes.array,
};

MediaFrame.defaultProps = {};
