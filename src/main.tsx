import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from '_main/components/App';
import store from '_main/services/store';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
);
