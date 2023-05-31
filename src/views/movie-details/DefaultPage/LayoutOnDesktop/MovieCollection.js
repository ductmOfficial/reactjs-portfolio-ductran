import isEmpty from 'lodash/isEmpty';

// project imports
import MainCard from 'components/MainCard';
import { MovieCollection as BaseComponent } from '../container';

const MovieCollection = ({ ...props }) => {
  if (isEmpty(props)) return null;

  return (
    <MainCard>
      <BaseComponent {...props} />
    </MainCard>
  );
};

export default MovieCollection;

MovieCollection.propTypes = {};
