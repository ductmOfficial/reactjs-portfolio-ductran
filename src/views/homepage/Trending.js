// project imports
import MediaFrame from './MediaFrame';
import { useTrending } from 'services/trending';

const Trending = () => {
  const { data } = useTrending('movie');

  return (
    <MediaFrame
      title="Trending"
      subtitle="Movies and TV shows that you have watchlisted"
      moreURL="/movies/trending"
      items={data?.results}
    />
  );
};

export default Trending;
