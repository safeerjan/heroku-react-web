import {
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_INPROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_INPROGRESS,
} from 'redux/actionTypes';

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFail = () => ({
  type: LOGOUT_FAIL,
});

export const logoutInProgress = () => ({
  type: LOGOUT_INPROGRESS,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const loginInProgress = () => ({
  type: LOGIN_INPROGRESS,
});

export const loginUser = () => (
  (dispatch) => {
    dispatch(loginInProgress());
  }
);

export const logoutUser = () => (
  (dispatch) => {
    dispatch(logoutInProgress());
  }
);

// export default logoutUser; // remove this line for multiple actions
