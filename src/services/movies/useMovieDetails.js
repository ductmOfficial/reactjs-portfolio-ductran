import useSWR from 'swr';

const processData = ({ data, ...others }) => {
  let newData;

  if (data) {
    newData = {
      ...data,
      videos: data.videos?.results ?? [],
      reviews: data.reviews?.results ?? [],
      similar: data.similar?.results ?? [],
      recommendations: data.recommendations?.results ?? [],
    };
  }

  return { data: newData, ...others };
};

const useMovieDetails = (movieId) =>
  processData(useSWR(movieId ? `/movie/${movieId}?append_to_response=credits,images,recommendations,reviews,similar,videos` : null));

export default useMovieDetails;
