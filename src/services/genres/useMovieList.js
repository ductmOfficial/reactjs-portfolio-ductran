import useSWR from 'swr';

const useMovieList = () => {
  const response = useSWR('/genre/movie/list');

  return response;
};

export default useMovieList;
