import useSWR from 'swr';

const useTrending = (mediaType = 'all', timeWindow = 'day') => {
  const response = useSWR(`/trending/${mediaType}/${timeWindow}`);

  return response;
};

export default useTrending;
