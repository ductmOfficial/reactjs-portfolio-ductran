import useSWR from 'swr';
import _ from 'lodash';

const builtInSections = [
  { id: 'trending_now', mediaType: 'tv', name: 'Trending Now', order: 0 },
  { id: 'rated_movies', mediaType: 'tv', name: 'Top 10 TV Shows in Vietnam Today', order: 2 },
  { id: 'popular', mediaType: 'tv', name: 'Popular on D.Movies', order: 4 },
  { id: 'new_release', mediaType: 'tv', name: 'New Release', order: 6 },
  { id: 'watch_it_again', mediaType: 'tv', name: 'Continue Watching for Profile', order: 8 },
];

const useTVShowSections = () => {
  const { data = {} } = useSWR(`/genre/tv/list`);

  const sections = _.chain(data.genres)
    .map((genre) => ({ ...genre, mediaType: 'tv' }))
    .concat(builtInSections)
    .shuffle()
    .map((item, index) => ({ order: index, ...item }))
    .sortBy('order')
    .value();

  return {
    data: sections,
  };
};

export default useTVShowSections;
