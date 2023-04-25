// project imports
import MediaFrame from 'components/MediaFrame';
import { useTrending } from 'services/trending';

const Trending = () => {
  const { data } = useTrending('movie');

  return <MediaFrame title="Trending" path="/movies/trending" items={data?.results} />;
};

export default Trending;
