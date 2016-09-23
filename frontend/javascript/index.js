/* @flow */
import '../scss/index.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router';

import rootReducer from './reducers';
import Root from './components/root';

const store = createStore(rootReducer);

//TODO: change config from HashRouter to BrowserRouter
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>,
  document.getElementById(('root'))
);
