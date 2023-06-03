import PropTypes from 'prop-types';

// project imports
import MainCard from 'components/MainCard';
import ResponsivePlayer from 'components/ResponsivePlayer';

const MoviePost = ({ key, name }) => (
  <MainCard title={`Trailer: ${name}`}>
    <ResponsivePlayer url={`https://www.youtube.com/watch?v=${key}`} />
  </MainCard>
);

export default MoviePost;

MoviePost.propTypes = {
  name: PropTypes.string,
  key: PropTypes.string,
};
