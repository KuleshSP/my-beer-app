import React from 'react';
import {Paper, Link} from 'components';
import routeTemplates from 'routes/route-templates';
import classes from './styles.module.scss';

interface ErrorProps {
  message?: string;
}
const Error = (props: ErrorProps) => {
  const {message = 'An error has occurred'} = props;

  return (
    <Paper classNames={classes.box}>
      <div>
        <h4 className={classes.errorText}>{message}</h4>
        <Link to={routeTemplates.home.path}>Go back to Home page</Link>
      </div>
    </Paper>
  );
};

export default Error;
