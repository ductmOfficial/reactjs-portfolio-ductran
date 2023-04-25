// project imports
import MediaFrame from 'components/MediaFrame';
import { usePopular } from 'services/movies';

const Popular = () => {
  const { data } = usePopular();

  return <MediaFrame title="Popular" path="/movies/popular" items={data?.results} />;
};

export default Popular;
