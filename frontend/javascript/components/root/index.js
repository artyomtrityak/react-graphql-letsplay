/* @flow */

import React from 'react';
import { Match } from 'react-router';
import Header from './header';
import Wellcome from './wellcome';
import Auth from '../auth';
import Rx from 'rxjs/Rx';
import graphql from '../../utils/graphql';


export default class App extends React.Component {
  load$: rx$SubscribtionT;

  componentWillMount(): void {
    const requestObservable = graphql({
      query: '{viewer(token:"abc"){id}}',
      variables: {
      }
    });

    this.load$ = requestObservable.subscribe((data) => {
      console.log('data:', data);
    });
    
  }

  componentWillUnmount() {
    this.load$.unsubscribe();
  }

  render(): ReactElement<any> {
    return (
      <div className="letsplay">
        <Header isLoggedIn={false} />

        <div className="root-container">
          <Match exactly pattern="/" component={Wellcome} />
          <Match pattern="/auth" component={Auth} />
        </div>
      </div>
    );
  }
} 
