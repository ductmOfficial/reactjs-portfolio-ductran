import useSWR from 'swr';

const useMovieDetails = (movieId) => useSWR(movieId ? `/movie/${movieId}` : null);

export default useMovieDetails;
