import useSWR from 'swr';

const useLatest = () => {
  const response = useSWR('/movie/latest');

  return response;
};

export default useLatest;
