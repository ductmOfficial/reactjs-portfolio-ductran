// project imports
import MainCard from 'components/MainCard';
import { MoviePhotos as BaseComponent } from '../components';

const MoviePhotos = ({ ...props }) => (
  <MainCard title="Photos">
    <BaseComponent {...props} />
  </MainCard>
);

export default MoviePhotos;

MoviePhotos.propTypes = {};
