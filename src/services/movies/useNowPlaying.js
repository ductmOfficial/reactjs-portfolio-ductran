import useSWR from 'swr';

const useNowPlaying = () => {
  const response = useSWR('/movie/now_playing');

  return response;
};

export default useNowPlaying;
