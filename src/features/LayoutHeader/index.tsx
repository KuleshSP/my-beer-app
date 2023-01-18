import React from 'react';
import {useMatch} from 'react-router-dom';
import {Header} from 'components';
import routeTemplates from 'routes/route-templates';
import Search from 'features/Search';
import Logo from 'components/Logo';

const LayoutHeader = (): JSX.Element => {
  const isMatchHomePage = useMatch(routeTemplates.home.path);

  return (
    <Header>
      <Logo />

      {isMatchHomePage && <Search />}
    </Header>
  );
};

export default LayoutHeader;
