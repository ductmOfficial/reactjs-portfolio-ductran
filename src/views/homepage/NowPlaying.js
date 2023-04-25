// project imports
import MediaFrame from 'components/MediaFrame';
import { useNowPlaying } from 'services/movies';

const NowPlaying = () => {
  const { data } = useNowPlaying();

  return <MediaFrame title="Now Playing" path="/movies/now-playing" items={data?.results} />;
};

export default NowPlaying;
