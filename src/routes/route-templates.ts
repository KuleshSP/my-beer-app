import {generatePath} from 'react-router-dom';

const routeTemplates = {
  home: {
    id: 'home',
    path: '/',
  },
  overview: {
    id: 'overview',
    path: '/overview/:id',
    build: (params: { id: number }) =>
      generatePath(routeTemplates.overview.path, {
        id: params.id,
      }),
  },
};

export default routeTemplates;
