import React from 'react';
import cx from 'classnames';
import classes from './styles.module.scss';

interface PaperProps extends React.PropsWithChildren {
  classNames?: string;
}

const Paper = (props: PaperProps): JSX.Element => {
  const {children, classNames} = props;

  return <div className={cx(classes.paper, classNames)}>{children}</div>;
};

export default Paper;
