import React from 'react';
import classes from './styles.module.scss';

const Header = (props: React.PropsWithChildren): JSX.Element => {
  const {children} = props;

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>{children}</div>
    </header>
  );
};

export default Header;
