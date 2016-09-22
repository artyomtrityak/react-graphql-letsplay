/* @flow */

import React from 'react';

export default class App extends React.Component {
  render(): ReactElement<any> {
    console.log(this.props.pathname);

    return (
      <div>
        Login
      </div>
    );
  }
} 