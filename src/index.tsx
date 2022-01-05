import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import './styles/global.scss';
import './styles/theme.scss';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
