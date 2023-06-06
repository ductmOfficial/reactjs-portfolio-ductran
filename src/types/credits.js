import PropTypes from 'prop-types';

export const TCast = {
  adult: PropTypes.bool,
  gender: PropTypes.number,
  id: PropTypes.number,
  known_for_department: PropTypes.string,
  name: PropTypes.string,
  original_name: PropTypes.string,
  popularity: PropTypes.number,
  profile_path: PropTypes.string,
  cast_id: PropTypes.number,
  character: PropTypes.string,
  credit_id: PropTypes.string,
  order: PropTypes.number,
};

export const TCrew = {
  adult: PropTypes.bool,
  gender: PropTypes.number,
  id: PropTypes.number,
  known_for_department: PropTypes.string,
  name: PropTypes.string,
  original_name: PropTypes.string,
  popularity: PropTypes.number,
  profile_path: PropTypes.string,
  credit_id: PropTypes.string,
  department: PropTypes.string,
  job: PropTypes.string,
};

export const TCredits = {
  cast: PropTypes.arrayOf(PropTypes.shape(TCast)),
  crew: PropTypes.arrayOf(PropTypes.shape(TCrew)),
};

export const TCreditDetails = {};
