import useSWR from 'swr';
import { stringifyUrl } from 'utils/request';

const useDiscoverMovie = (query = {}) => {
  const endpoint = stringifyUrl('/discover/movie', query);
  const response = useSWR(endpoint);

  return response;
};

export default useDiscoverMovie;
