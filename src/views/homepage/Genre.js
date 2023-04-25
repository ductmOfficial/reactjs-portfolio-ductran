import PropTypes from 'prop-types';

// project imports
import MediaFrame from 'components/MediaFrame';
import { useDiscoverMovie } from 'services/discover';

const Genre = ({ id, title }) => {
  const { data } = useDiscoverMovie({ with_genres: id, year: new Date().getFullYear() });

  return <MediaFrame title={title} path={`/movies/${title.replaceAll(' ', '-').toLowerCase()}`} items={data?.results} />;
};

export default Genre;

Genre.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

Genre.defaultProps = {
  title: '',
};
