import useSWR from 'swr';

const useDetails = (movieId) => useSWR(movieId ? `/collection/${movieId}` : null);

export default useDetails;
