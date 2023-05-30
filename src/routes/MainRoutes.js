import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AuthGuard from './AuthGuard';

const Homepage = Loadable(lazy(() => import('views/homepage')));
const Movies = Loadable(lazy(() => import('views/movies')));
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
      path: 'home',
      element: <Homepage />,
    },
    {
      path: 'movies',
      element: <Movies />,
      children: [
        {
          path: 'now-playing',
          element: <Movies />,
        },
        {
          path: 'popular',
          element: <Movies />,
        },
      ],
    },
    {
      path: 'details',
      element: <MovieDetails.Index />,
      children: [
        {
          path: ':id',
          element: <MovieDetails.DefaultPage />,
        },
      ],
    },
    {
      path: 'tv-shows',
      element: <Movies />,
    },
    {
      path: 'celebs',
      element: <Movies />,
    },
    {
      path: 'feeds',
      element: <Movies />,
    },
    {
      path: 'watch',
      element: <Movies />,
    },
    {
      path: 'watchlist',
      element: <Movies />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRoutes;
