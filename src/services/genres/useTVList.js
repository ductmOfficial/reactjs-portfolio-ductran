import useSWR from 'swr';

const useTVList = () => {
  const response = useSWR('/genre/movie/list');

  return response;
};

export default useTVList;
