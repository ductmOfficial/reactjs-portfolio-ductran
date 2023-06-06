import { useState } from 'react';

// project imports
import { useDetails } from 'services/collection';
import { TMovieDetails } from 'types';
import { MovieCollection as BaseComponent } from '../components';

const MovieCollection = ({ ...props }) => {
  const [id, setId] = useState();
  const { data } = useDetails(id);

  const parts = data?.parts ?? [];

  return <BaseComponent {...props} parts={parts} onGetParts={() => setId(props.id)} />;
};

export default MovieCollection;

MovieCollection.propTypes = TMovieDetails;
