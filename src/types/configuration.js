import PropTypes from 'prop-types';

export const TProductionCountry = {
  iso_3166_1: PropTypes.string,
  name: PropTypes.string,
};

export const TLanguage = {
  english_name: PropTypes.string,
  iso_639_1: PropTypes.string,
  name: PropTypes.string,
};

export const TImage = {
  aspect_ratio: PropTypes.number,
  height: PropTypes.number,
  iso_639_1: PropTypes.string,
  file_path: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  width: PropTypes.number,
};
