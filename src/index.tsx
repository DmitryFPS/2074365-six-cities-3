import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from '@/store';
import React from 'react';
import App from '@/app.tsx';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>
);
