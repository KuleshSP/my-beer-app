import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {router} from 'routes';
import {actions as appActions} from '../services/actions';

const connector = connect(undefined, appActions);

type ReduxProps = ConnectedProps<typeof connector>;

const App = (props: ReduxProps) => {
  const {mountApp, unmountApp} = props;

  useEffect(() => {
    mountApp();

    return () => {
      unmountApp();
    };
  }, []);

  return <RouterProvider router={router} />;
};

export default connector(App);
