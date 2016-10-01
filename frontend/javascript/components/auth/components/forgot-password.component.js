/* @flow */

import React from 'react';

export default class Registration extends React.Component {
  render(): ReactElement<any> {
    return (
      <div className="login-container">
        <div className="auth-form">
          
          <div className="col-md-12 text-xs-center">
            <h3>Forgot password</h3>
          </div>
          
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>

          <div className="col-md-12">
            <button type="button" className="btn btn-primary btn-block">Reset password</button>
          </div>
        </div>

      </div>
    );
  }
} 