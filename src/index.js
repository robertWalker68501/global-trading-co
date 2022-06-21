import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './App';
//import { CartProvider } from './contexts/cart.context';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {/*<CartProvider>*/}
      <App />
      {/*</CartProvider>*/}
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
