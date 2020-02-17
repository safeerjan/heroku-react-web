import * as types from 'redux/actionTypes';

const initialState = {
  fullName: 'React-Heroku-01',
  userImage: '',
  loggedInTime: '',
};

export default function launchReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT_SUCCESS: {
      return Object.assign({}, state, {
        fullName: '',
      });
    }
    default:
      return state;
  }
}
