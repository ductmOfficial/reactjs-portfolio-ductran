import useSWR from 'swr';

const usePopular = () => {
  const response = useSWR('/movie/popular');

  return response;
};

export default usePopular;
