/* @flow */

const defaultViewerState = {
  user: {},
  loading: true
};


export type StateT = {
  user: Object;
  loading: boolean;
};
type ActionT = {
  type: string;
};
export default function viewerReducer(state: StateT=defaultViewerState, action: ActionT): StateT {
  switch (action.type) {

    default:
      return state;
  }
}