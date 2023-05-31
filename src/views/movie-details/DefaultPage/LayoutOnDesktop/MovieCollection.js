// project imports
import MainCard from 'components/MainCard';
import { MovieCollection as BaseComponent } from '../container';

const MovieCollection = ({ ...props }) => (
  <MainCard>
    <BaseComponent {...props} />
  </MainCard>
);

export default MovieCollection;

MovieCollection.propTypes = {};
