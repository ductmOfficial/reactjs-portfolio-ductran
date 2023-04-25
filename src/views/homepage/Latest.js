// project imports
import MediaFrame from 'components/MediaFrame';
import { useLatest } from 'services/movies';

const NowPlaying = () => {
  const { data } = useLatest();

  return <MediaFrame title="Latest" path="/movies/latest" items={data?.results} />;
};

export default NowPlaying;
