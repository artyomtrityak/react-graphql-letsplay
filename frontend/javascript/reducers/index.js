/* @flow */

import { combineReducers } from 'redux';

//Viwer
import viewer from './viewer.reducer';
import type {StateT as ViewerT} from './viewer.reducer';
export type {ViewerT};


export type StateT = {
  viewer: ViewerT
};
export default combineReducers({
  viewer
});