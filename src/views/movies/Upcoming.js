// project imports
import MediaFrame from 'components/MediaFrame';
import { useUpcoming } from 'services/movies';

const Upcoming = () => {
  const { data } = useUpcoming();

  return <MediaFrame title="Upcoming" path="/movies/upcoming" items={data?.results} />;
};

export default Upcoming;
