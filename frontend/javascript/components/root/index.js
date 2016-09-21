/* @flow */

import React from 'react';
import { Match } from 'react-router';
import Login from '../login';


export default class App extends React.Component {
  render(): ReactElement<any> {
    return (
      <div>
        Root

        <Match exactly pattern="/" component={Login} />
      </div>
    );
  }
} 