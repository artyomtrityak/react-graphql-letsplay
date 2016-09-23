/* @flow */

import React from 'react';
import { Link } from 'react-router';

type PropsT = {
  rootPath: string;
};

export default class Registration extends React.Component {
  props: PropsT;

  render(): ReactElement<any> {
    const { rootPath } = this.props;

    return (
      <div className="login-container">
        <div className="auth-form">
          
          <div className="col-md-12 text-xs-center">
            <h3>Sign Up</h3>
          </div>
          
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" />
                <small className="form-text text-danger">
                  User with that email already exists
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label>Repeat password</label>
                <input type="password" className="form-control" />
                <small className="form-text text-danger">
                  Passwords do not match
                </small>
              </div>
            </form>
          </div>

          <div className="col-md-12">
            <button type="button" className="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>

        <div className="row m-t-1">
          <div className="col-md-12">
            <small>Already have an account? <Link to={`${rootPath}/login`}>Sign in</Link>.</small>
          </div>
        </div>

        <div className="row m-t-1">
          <div className="col-md-12">
            <small>By signing up you are agreeing to our <Link to={`${rootPath}/terms-and-conditions`}>Terms and Conditions</Link>.</small>
          </div>
        </div>

      </div>
    );
  }
} 