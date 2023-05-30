import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const TMovie = PropTypes.shape({
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  belongs_to_collection: PropTypes.object,
  budget: PropTypes.number,
});
