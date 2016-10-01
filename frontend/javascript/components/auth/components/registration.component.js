/* @flow */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import graphql from '../../../utils/graphql';
//Types
import type { ViewerT, StateT, AuthT } from '../../../reducers';


type PropsT = {
  rootPath: string;
  auth: AuthT;
  dispatchChnagedFields: (data: {email?: string; password?: string; password2?: string}) => void;
  dispatchRegister: () => void
};

class Registration extends React.Component {
  props: PropsT;
  state: {showClientValidation: boolean;}
  
  constructor(props) {
    super(props);

    this.state = {
      showClientValidation: false
    };
  }

  onFieldChange(fieldName: string, e: Event): void {
    if (this.state.showClientValidation) {
      this.setState({showClientValidation: false});
    }
    if (e.target instanceof HTMLInputElement) {
      this.props.dispatchChnagedFields({[fieldName]: e.target.value});
    }
  }

  onRegister(): void {
    if (this.shouldPasswordMatchErrorShow() || this.shouldAllFieldsFilledInErrorShow()) {
      this.setState({showClientValidation: true});
      return;  
    }
    this.props.dispatchRegister();
  }

  shouldPasswordMatchErrorShow(): boolean {
    const { password, password2 } = this.props.auth;
    return !!password && !!password2 && password !== password2;
  }

  shouldAllFieldsFilledInErrorShow(): boolean {
    const { password, password2, email } = this.props.auth;
    return !password || !password2 || !email;
  }

  render(): ReactElement<any> {
    const { rootPath, auth } = this.props;

    console.log(auth);

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
                
                <input
                  type="text"
                  className="form-control"
                  value={auth.email}
                  onChange={(e) => this.onFieldChange('email', e)}
                />

                {
                  auth.serverError ? (
                    <small className="form-text text-danger">
                      User with that email already exists
                    </small>
                  ) : null
                }
                
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={auth.password}
                  onChange={(e) => this.onFieldChange('password', e)}
                />
              </div>

              <div className="form-group">
                <label>Repeat password</label>
                <input
                  type="password"
                  className="form-control"
                  value={auth.password2}
                  onChange={(e) => this.onFieldChange('password2', e)}
                />

                {
                  this.state.showClientValidation && this.shouldPasswordMatchErrorShow() ? (
                    <small className="form-text text-danger">
                      Passwords do not match
                    </small>
                  ) : null
                }
                {
                  this.state.showClientValidation && this.shouldAllFieldsFilledInErrorShow() ? (
                    <small className="form-text text-danger">
                      All fields should be filled in
                    </small>
                  ) : null
                }
              </div>
            </form>
          </div>

          <div className="col-md-12">
            <button type="button" className="btn btn-primary btn-block" onClick={() => this.onRegister()}>
              Sign Up
            </button>
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


function mapStateToProps(state: StateT) {
  return {
    viewer: state.viewer,
    auth: state.auth
  }; 
}


function mapDispatchToProps(dispatch) {
  return {
    dispatchRegister: (): void => (
      dispatch({type: 'REGISTER_REQUEST'})
    ),
    dispatchChnagedFields: (data): void => (
      dispatch({type: 'REGISTER_CHANGE_FIELDS', data})
    )
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Registration);
