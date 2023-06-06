import PropTypes from 'prop-types';

// project imports
import MainCard from 'components/MainCard';
import { ResponsivePlayer } from 'components/extended';

const MoviePost = ({ video }) => (
  <MainCard title={`Trailer: ${video.name}`}>
    <ResponsivePlayer url={`https://www.youtube.com/watch?v=${video.key}`} />
  </MainCard>
);

export default MoviePost;

MoviePost.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string,
    key: PropTypes.string,
  }),
};
