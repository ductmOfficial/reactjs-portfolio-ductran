// project imports
import MainCard from 'components/MainCard';
import { MovieInfo as BaseComponent } from '../components';

const MovieInfo = ({ ...props }) => (
  <MainCard title="Info">
    <BaseComponent {...props} />
  </MainCard>
);

export default MovieInfo;
