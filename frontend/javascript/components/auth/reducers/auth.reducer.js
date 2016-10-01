/* @flow */

import _ from 'lodash';


const defaultAuthState = {
  email: '',
  password: '',
  password2: '',
  loading: false,
  serverError: undefined
};

export type StateT = {
  email: string;
  password: string;
  password2: string;
  loading: boolean;
  serverError: void | boolean;
};

type ActionT = {
  type: string;
  data?: {email?: string; password?: string; password2?: string};
};

export default function authReducer(state: StateT=defaultAuthState, action: ActionT): StateT {
  switch (action.type) {
    case 'REGISTER_CHANGE_FIELDS':
      if (!action.data) {
        return state;
      }
      return Object.assign(
        {},
        state,
        {showClientValidation: false},
        _.pickBy(
          _.pick(action.data, ['email', 'password', 'password2']), (val) => val !== void 0 
        )
      );

    case 'REGISTER_REQUEST':
      return Object.assign({}, state, {loading: true});

    case 'REGISTER_RESPONSE':
      return Object.assign({}, state, {loading: false});

    default:
      return state;
  }
}