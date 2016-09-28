/* @flow */

const defaultViewerState = {
  user: {},
  loading: true
};


export type StateT = {

};
type ActionT = {
  type: string;
};
export default function userReducer(state: StateT=defaultViewerState, action: ActionT) {
  switch (action.type) {

    default:
      return state;
  }
}