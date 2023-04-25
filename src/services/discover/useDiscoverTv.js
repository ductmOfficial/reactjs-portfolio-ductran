import useSWR from 'swr';
import { stringifyUrl } from 'utils/request';

const useDiscoverTV = (query = {}) => {
  const endpoint = stringifyUrl('/discover/tv', query);
  const response = useSWR(endpoint);

  return response;
};

export default useDiscoverTV;
