import PropTypes from 'prop-types';

export const TCollection = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
};

export const TCollectionPart = {
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
};

export const TCollectionDetails = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
  parts: PropTypes.arrayOf(PropTypes.shape(TCollectionPart)),
};
