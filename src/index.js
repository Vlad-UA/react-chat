import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto/index.css';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const rootEl = document.getElementById('root');
const store = configureStore();
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

render();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}

registerServiceWorker();
