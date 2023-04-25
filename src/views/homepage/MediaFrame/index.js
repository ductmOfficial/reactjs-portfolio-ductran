import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MediaSwiper from 'components/MediaSwiper';

const MediaFrame = ({ title, subtitle, items }) => (
  <Stack spacing={1}>
    {title && (
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography variant="h3">{title}</Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
        <Box flexGrow={1} />
      </Box>
    )}

    <Box>
      <MediaSwiper
        slidesPerView="auto"
        spaceBetween={{ xs: 5, sm: 10 }}
        navigation={{ xs: false, lg: true }}
        slideWidth={{ xs: 105, sm: 130, md: 180, lg: 220, xl: 260 }}
        items={items}
      />
    </Box>
  </Stack>
);

export default MediaFrame;

MediaFrame.defaultProps = {};

MediaFrame.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.array,
};
