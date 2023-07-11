import useSWR from 'swr';
import _ from 'lodash';

const builtInSections = [
  { id: 'trending_now', mediaType: 'multi', name: 'Trending Now', order: 0 },
  { id: 'rated_movies', mediaType: 'tv', name: 'Top 10 TV Shows in Vietnam Today', order: 1 },
  { id: 'rated_tvshows', mediaType: 'movie', name: 'Top 10 Movies in Vietnam Today', order: 2 },
  { id: 'popular', mediaType: 'multi', name: 'Popular on D.Movies', order: 3 },
  { id: 'new_release', mediaType: 'multi', name: 'New Release', order: 4 },
  { id: 'watch_it_again', mediaType: 'multi', name: 'Watch It Again', order: 5 },
  { id: 'top_searches', mediaType: 'multi', name: 'Top Searches', order: 6 },
  { id: 'past_year', mediaType: 'multi', name: 'Released in the Past Year', order: 7 },
];

const useHomepage = () => {
  const { data: movieGenres = {} } = useSWR(`/genre/movie/list`);
  const { data: tvGenres = {} } = useSWR(`/genre/tv/list`);

  const genres = _.intersectionWith(movieGenres.genres, tvGenres.genres, (a, b) => a.id === b.id && a.name === b.name);
  const sections = _.chain(genres)
    .map((genre) => ({ ...genre, mediaType: 'multi' }))
    .concat(builtInSections)
    .shuffle()
    .map((item, index) => ({ order: index, ...item }))
    .sortBy('order')
    .value();

  return {
    data: sections,
  };
};

export default useHomepage;
