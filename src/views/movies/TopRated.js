// project imports
import MediaFrame from 'components/MediaFrame';
import { useTopRated } from 'services/movies';

const TopRated = () => {
  const { data } = useTopRated();

  return <MediaFrame title="Top Rated" path="/movies/top-rated" items={data?.results} />;
};

export default TopRated;
