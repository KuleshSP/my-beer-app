import React from 'react';
import styles from './styles.module.scss';

const LayoutRoot = (props: React.PropsWithChildren): JSX.Element => {
  const {children} = props;

  return <div className={styles.layoutRoot}>{children}</div>;
};

export default LayoutRoot;
