/* @flow */

import React from 'react';
import { Link, Match } from 'react-router';
import Login from './login';
import Registration from './registration';
import Terms from './terms-and-conditions';
import ForgotPassword from './forgot-password';
import Logout from './logout';

type PropsT = {
  pathname: string;
};
export default class AuthContainer extends React.Component {
  props: PropsT;

  render(): ReactElement<any> {
    const { pathname } = this.props;

    return (
      <div className="auth-container">
        <Match pattern={`${pathname}/login`} render={() => <Login rootPath={pathname} />} />
        <Match pattern={`${pathname}/signup`} render={() => <Registration rootPath={pathname} />} />
        <Match pattern={`${pathname}/forgot-password`} render={() => <ForgotPassword rootPath={pathname} />} />
        <Match pattern={`${pathname}/logout`} component={Logout} />
        <Match pattern={`${pathname}/terms-and-conditions`} render={() => <Terms rootPath={pathname} />} />
      </div>
    );
  }
} 