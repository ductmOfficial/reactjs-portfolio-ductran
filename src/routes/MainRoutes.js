import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AuthGuard from './AuthGuard';

const Homepage = Loadable(lazy(() => import('views/homepage')));
const StyleGuide = Loadable(lazy(() => import('views/style-guide')));
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
      path: 'style-guide',
      element: <StyleGuide />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRoutes;
