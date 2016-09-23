/* @flow */

import React from 'react';
import { Match } from 'react-router';
import Header from './header';
import Home from './home';
import Auth from '../auth';


export default class App extends React.Component {
  render(): ReactElement<any> {
    return (
      <div className="letsplay">
        <Header isLoggedIn={false} />

        <div className="root-container">
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/auth" component={Auth} />
        </div>
      </div>
    );
  }
} 