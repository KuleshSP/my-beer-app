import React from 'react';
import {Link as RouterLink, LinkProps} from 'react-router-dom';
import cx from 'classnames';
import styles from './styles.module.scss';

const Link = (props: LinkProps): JSX.Element => {
  const {className, ...rest} = props;

  return <RouterLink className={cx(styles.link, className)} {...rest} />;
};

export default Link;
