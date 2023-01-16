import React from 'react';
import {Route, Routes} from 'react-router-dom';
import IndexLayout from 'features/Layout';

import PageNotFound from 'pages/not-found/components';
import HomePage from 'pages/_home/components';

import routeTemplates from './route-templates';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={routeTemplates.home.path} element={<IndexLayout />}>
        <Route path={routeTemplates.home.path} element={<HomePage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
