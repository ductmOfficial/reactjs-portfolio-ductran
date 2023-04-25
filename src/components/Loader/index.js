import PropTypes from 'prop-types';

// project imports
import InitializedLoader from './InitializedLoader';
import ProgressLoader from './ProgressLoader';

// ==============================|| LOADER ||============================== //
const Loader = ({ type }) => {
  if (type === 'initialize') {
    return <InitializedLoader />;
  }

  return <ProgressLoader />;
};

export default Loader;

Loader.propTypes = {
  type: PropTypes.oneOf(['progress', 'initialize']),
};

Loader.defaultProps = {
  type: 'progress',
};
