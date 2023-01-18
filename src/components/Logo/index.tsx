import React from 'react';
import {Link} from 'components';
import routeTemplates from 'routes/route-templates';
import classes from './styles.module.scss';

const Logo = (): JSX.Element => {
  return (
    <div className={classes.logoBox}>
      <Link to={routeTemplates.home.path}>Logo</Link>
    </div>
  );
};

export default Logo;
