/* @flow */
import '../scss/index.scss';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Root from './components/root';

const store = createStore(rootReducer);

//TODO: change config from HashRouter to BrowserRouter
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById(('root'))
);
