/* @flow */

import React from 'react';
import { Link } from 'react-router';
import Icon from '../shared/icon';
import facebookIcon from '../../../icons/facebook.svg';
import googleIcon from '../../../icons/google-plus.svg';
import twitterIcon from '../../../icons/twitter.svg';

type PropsT = {
  rootPath: string;
};

export default class Login extends React.Component {
  props: PropsT;

  render(): ReactElement<any> {
    const { rootPath } = this.props;

    console.log(this.props);

    return (
      <div className="login-container">
        <div className="auth-form">
          
          <div className="col-md-12 text-xs-center">
            <h3>Login</h3>
          </div>
          
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" />
                <small className="form-text text-danger">
                  The username or password you have entered is invalid.
                </small>
              </div>
              <div className="form-group">
                <label className="d-block">
                  <span className="pull-xs-left">Password</span>
                  <span className="pull-xs-right"><Link to={`${rootPath}/forgot-password`}>Forgot password?</Link></span>
                </label>
                <input type="password" className="form-control" />
              </div>
            </form>
          </div>

          <div className="col-md-12">
            <button type="button" className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>

        <div className="login-divider-header">
          <div className="col-md-4 divider" />
          <div className="col-md-4 text-xs-center">Social Sign Up</div>
          <div className="col-md-4 divider" />
        </div>

        <div className="login-social">
          <Icon iconName={facebookIcon} className="m-t-1" width={50} height={50} />
          <Icon iconName={googleIcon} className="m-t-1" width={50} height={50} />
          <Icon iconName={twitterIcon} className="m-t-1" width={50} height={50} />
        </div>

        <div className="login-divider-header">
          <div className="col-md-2 divider" />
          <div className="col-md-8 text-xs-center">New to BoardGame Calendar?</div>
          <div className="col-md-2 divider" />
        </div>

        <div className="row m-t-1">
          <div className="col-md-12">
            <Link to={`${rootPath}/signup`} className="btn btn-secondary btn-block">Sign Up</Link>
          </div>
        </div>

        <div className="row m-t-1">
          <div className="col-md-12">
            <small>By signing in you are agreeing to our <Link to={`${rootPath}/terms-and-conditions`}>Terms and Conditions</Link>.</small>
          </div>
        </div>

      </div>
    );
  }
} 