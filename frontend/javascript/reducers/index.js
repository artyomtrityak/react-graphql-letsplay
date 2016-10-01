/* @flow */

import { combineReducers } from 'redux';

//Viwer
import viewer from './viewer.reducer';
import type {StateT as ViewerT} from './viewer.reducer';
export type {ViewerT};

//Auth
import auth from '../components/auth/reducers/auth.reducer';
import type {StateT as AuthT} from '../components/auth/reducers/auth.reducer';
export type {AuthT};


export type StateT = {
  viewer: ViewerT;
  auth: AuthT;
};
export default combineReducers({
  viewer,
  auth
});