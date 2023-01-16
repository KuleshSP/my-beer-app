import React from 'react';
import {Header, Link} from 'components';
import routeTemplates from 'routes/route-templates';

const LayoutHeader = (): JSX.Element => {
  return (
    <Header>
      <Link to={routeTemplates.home.path}>Logo</Link>

      <div>Search</div>
    </Header>
  );
};

export default LayoutHeader;
