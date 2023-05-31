import PropTypes from 'prop-types';

// project imports
import { useDetails } from 'services/collection';
import { MovieCollection as BaseComponent } from '../components';
import { useState } from 'react';

const MovieCollection = ({ ...props }) => {
  const [id, setId] = useState();
  const { data } = useDetails(id);

  const parts = data?.parts ?? [];

  return <BaseComponent {...props} parts={parts} onGetParts={() => setId(props.id)} />;
};

export default MovieCollection;

MovieCollection.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
};
