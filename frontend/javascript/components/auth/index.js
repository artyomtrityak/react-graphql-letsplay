/* @flow */

import React from 'react';
import { Link, Match } from 'react-router';
import Login from './components/login.component';
import Registration from './components/registration.component';
import Terms from './components/terms-and-conditions.component';
import ForgotPassword from './components/forgot-password.component';
import Logout from './components/logout.component';


type PropsT = {
  pathname: string;
};
export default class AuthContainer extends React.Component {
  props: PropsT;

  render(): ReactElement<any> {
    const { pathname } = this.props;

    return (
      <div className="auth-container">
        <Match pattern={`${pathname}/login`} render={() => {
          console.log('login!');
          return <Login rootPath={pathname} />;
        }} />
        <Match pattern={`${pathname}/signup`} render={() => <Registration rootPath={pathname} />} />
      </div>
    );
  }
} 