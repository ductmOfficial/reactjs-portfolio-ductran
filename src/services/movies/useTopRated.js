import useSWR from 'swr';

const useTopRated = () => {
  const response = useSWR('/movie/top_rated');

  return response;
};

export default useTopRated;
