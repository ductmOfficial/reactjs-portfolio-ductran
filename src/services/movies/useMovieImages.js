import useSWR from 'swr';

const useMovieImages = (movieId) => useSWR(movieId ? `/movie/${movieId}/images` : null);

export default useMovieImages;
