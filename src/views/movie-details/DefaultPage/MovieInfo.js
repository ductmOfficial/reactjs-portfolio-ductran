// project imports
import MainCard from 'components/MainCard';
import BaseComponent from './components/MovieInfo';

const MovieInfo = ({ ...props }) => (
  <MainCard title="Info">
    <BaseComponent {...props} />
  </MainCard>
);

export default MovieInfo;

MovieInfo.propTypes = {};
