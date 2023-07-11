import useSWR from 'swr';
import _ from 'lodash';

const builtInSections = [
  { id: 'trending_now', mediaType: 'movie', name: 'Trending Now', order: 0 },
  { id: 'rated_tvshows', mediaType: 'movie', name: 'Top 10 Movies in Vietnam Today', order: 2 },
  { id: 'popular', mediaType: 'movie', name: 'Popular on D.Movies', order: 4 },
  { id: 'new_release', mediaType: 'movie', name: 'New Release', order: 6 },
  { id: 'watch_it_again', mediaType: 'movie', name: 'Continue Watching for Profile', order: 8 },
];

const useMovieSections = () => {
  const { data = {} } = useSWR(`/genre/movie/list`);

  const sections = _.chain(data.genres)
    .map((genre) => ({ ...genre, mediaType: 'movie' }))
    .concat(builtInSections)
    .shuffle()
    .map((item, index) => ({ order: index, ...item }))
    .sortBy('order')
    .value();

  return {
    data: sections,
  };
};

export default useMovieSections;
