import PropTypes from 'prop-types';

// material-ui
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// project imports
import { generateImageUrl } from 'utils/movie';

const MoviePhotos = ({ backdrops = [], posters = [] }) => {
  const topPosters = posters.filter((_, index) => index < 3).map((item) => ({ ...item, type: 'poster' }));
  const topBackdrops = backdrops.filter((_, index) => index < 6).map((item) => ({ ...item, type: 'backdrop' }));
  const photos = topPosters.concat(topBackdrops);

  return (
    <ImageList cols={3} gap={1} sx={{ p: 0, m: 0 }}>
      {photos
        .filter((_, index) => index < 12)
        .map((item) => (
          <ImageListItem key={item.file_path}>
            <img
              src={generateImageUrl(item.type, item.file_path, `w=${item.width}&h=${item.height}&fit=crop&auto=format`)}
              srcSet={generateImageUrl(item.type, item.file_path, `w=${item.width}&h=${item.height}&fit=crop&auto=format&dpr=2 2x`)}
              alt={item.file_path}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};

export default MoviePhotos;

MoviePhotos.propTypes = {
  backdrops: PropTypes.arrayOf(
    PropTypes.shape({
      aspect_ratio: PropTypes.number,
      height: PropTypes.number,
      iso_639_1: PropTypes.string,
      file_path: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
      width: PropTypes.number,
    })
  ),
  posters: PropTypes.array,
  // logos: PropTypes.array,
};
