import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// project imports
import StyledAvatar from 'components/extended/Avatar';
import { generateImageUrl } from 'utils/movie';

const MovieCollection = ({ parts = [], onGetParts, ...props }) => {
  const url = generateImageUrl('collection', props.backdrop_path);
  const shouldRenderList = Boolean(parts && parts.length);

  return (
    <Box sx={{}}>
      <Box component="img" src={url} alt={props.name} sx={{ maxWidth: 1 }} />
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 400, mt: 1 }}>
        {`Part of the ${props.name}`}
      </Typography>

      {!shouldRenderList && (
        <Button variant="contained" size="small" onClick={onGetParts}>
          Get parts!
        </Button>
      )}

      {shouldRenderList && (
        <MediaObject dividers sx={{ mt: 2 }}>
          {parts.map((part, index) => (
            <Media key={index}>
              <MediaImage width={80}>
                <StyledAvatar variant="square" src={generateImageUrl('poster', part.poster_path)} sx={{ width: 80, height: 80 }} />
              </MediaImage>
              <MediaBody>
                <Typography variant="h5" sx={{ color: 'success.main' }}>
                  {`${(part.vote_average * 10).toFixed(0)}%`} User Score
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 400 }}>
                  {part.title}
                </Typography>
              </MediaBody>
            </Media>
          ))}
        </MediaObject>
      )}
    </Box>
  );
};

const MediaObject = styled(({ dividers, ...props }) => (
  <Box
    display="flex"
    flexDirection="column"
    {...props}
    sx={{
      '> div': { pb: 1, mb: 1 },
      '> div:last-child': { pb: 0, mb: 0 },
      ...(dividers && { '> div:not(:last-child)': { borderBottom: ({ palette }) => `1px solid ${palette.divider}` } }),
      ...props.sx,
    }}
  />
))(() => ({}));
const Media = styled((props) => <Box display="flex" flexDirection="row" gap={1} {...props} />)(() => ({}));
const MediaImage = styled((props) => <Box flex="0 0 auto" width="30%" {...props} />)(() => ({}));
const MediaBody = styled((props) => <Box flex="1 1" {...props} />)(() => ({}));

export default MovieCollection;

MovieCollection.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool,
      backdrop_path: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      original_language: PropTypes.string,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      media_type: PropTypes.oneOf(['movie', 'tv']),
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      popularity: PropTypes.number,
      release_date: PropTypes.string,
      video: PropTypes.bool,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    })
  ),
  onGetParts: PropTypes.func,
};
