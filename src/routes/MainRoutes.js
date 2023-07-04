import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AuthGuard from './AuthGuard';

const Celebs = Loadable(lazy(() => import('views/celebs')));
const English = Loadable(lazy(() => import('views/english')));
const Homepage = Loadable(lazy(() => import('views/homepage')));
const Movies = Loadable(lazy(() => import('views/movies')));
const TvShows = Loadable(lazy(() => import('views/tv-shows')));
const Watch = Loadable(lazy(() => import('views/watch')));
const Watchlist = Loadable(lazy(() => import('views/watchlist')));

const MovieDetails = {
  Index: Loadable(lazy(() => import('views/movie-details'))),
  DefaultPage: Loadable(lazy(() => import('views/movie-details/DefaultPage'))),
};

const NotFound = Loadable(lazy(() => import('views/errors/NotFound')));

const MainRoutes = {
  path: '/',
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      index: true,
      element: <Homepage />,
    },
    {
      path: 'movies',
      element: <Movies />,
    },
    {
      path: 'details',
      element: <MovieDetails.Index />,
      children: [{ path: ':id', element: <MovieDetails.DefaultPage /> }],
    },
    {
      path: 'tv-shows',
      element: <TvShows />,
    },
    {
      path: 'celebs',
      element: <Celebs />,
    },
    {
      path: 'feeds',
      element: <Movies />,
    },
    {
      path: 'watch',
      element: <Watch />,
    },
    {
      path: 'watchlist',
      element: <Watchlist />,
    },
    {
      path: 'english',
      element: <English />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRoutes;
