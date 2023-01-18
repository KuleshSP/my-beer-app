import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import IndexLayout from 'features/Layout';

import PageNotFound from 'pages/not-found/components';
import HomePage from 'pages/_home/components';

import BeerOverviewPage from 'pages/beerOverview/components';
import routeTemplates from './route-templates';

export const router = createBrowserRouter([
  {
    path: routeTemplates.home.path,
    element: <IndexLayout />,
    // errorElement: <PageNotFound />,
    children: [
      {
        path: routeTemplates.home.path,
        element: <HomePage />,
      },
      {
        path: routeTemplates.overview.path,
        element: <BeerOverviewPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);
