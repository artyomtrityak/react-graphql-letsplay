/* @flow */

import React from 'react';
import { Match } from 'react-router';
import Login from '../login';
import Header from './header';


export default class App extends React.Component {
  render(): ReactElement<any> {
    return (
      <div>
        <Header isLoggedIn={false} />

        <Match exactly pattern="/" component={Login} />
      </div>
    );
  }
} 