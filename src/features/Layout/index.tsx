import React from 'react';
import {Outlet} from 'react-router-dom';
import {LayoutRoot, LayoutMain} from 'components';

import LayoutHeader from 'features/LayoutHeader';

const IndexLayout = (): JSX.Element => {
  return (
    <LayoutRoot>
      <LayoutHeader />

      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </LayoutRoot>
  );
};

export default IndexLayout;
