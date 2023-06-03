import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';

// project imports
import MoviePost from './MoviePost';
import MovieRecommendation from './MovieRecommendation';
import MovieReviews from './MovieReviews';
import MovieSimilar from './MovieSimilar';

const MovieContent = ({ reviews = [], recommendations = [], similar = [], videos = [] }) => {
  const shownVideos = videos.filter(({ type }) => ['Trailer', 'Teaser'].includes(type));
  const [first, second, ...others] = shownVideos;

  const templates = [
    { type: 'review', data: { video: first, reviews } },
    { type: 'similar_primary', data: similar.slice(0, 3) },
    { type: 'video', data: [second] },
    { type: 'similar_secondary', data: similar.slice(3) },
    { type: 'video', data: others },
    { type: 'recommedation', data: recommendations },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      {templates.map((frame, index) => (
        <ContentFrame key={`${frame.type}[${index}]`} {...frame} />
      ))}
    </Box>
  );
};

const ContentFrame = ({ type, data = [] }) => {
  switch (type) {
    case 'review':
      return <MovieReviews {...data} />;
    case 'video':
      return (data || []).filter(Boolean).map((item) => <MoviePost key={item.id} {...item} />);
    case 'similar_primary':
      return <MovieSimilar movies={data} />;
    case 'similar_secondary':
      return <MovieSimilar movies={data} />;
    case 'recommedation':
      return <MovieRecommendation movies={data} />;
    default:
      return null;
  }
};

export default MovieContent;

MovieContent.propTypes = {
  recommendations: PropTypes.array,
  reviews: PropTypes.array,
  similar: PropTypes.array,
  videos: PropTypes.array,
};

MovieContent.defaultProps = {
  recommendations: [],
  reviews: [],
  similar: [],
  videos: [],
};

ContentFrame.propTypes = {
  type: PropTypes.string,
  data: PropTypes.any,
};
