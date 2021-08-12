import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import configureStore from './redux/store';
import './index.scss';

const store = configureStore();

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
