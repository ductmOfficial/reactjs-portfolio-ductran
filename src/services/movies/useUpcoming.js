import useSWR from 'swr';

const useUpcoming = () => {
  const response = useSWR('/movie/upcoming');

  return response;
};

export default useUpcoming;
