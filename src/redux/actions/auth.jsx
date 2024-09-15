// src/redux/actions/authActions.js

import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./types";

export const loginSuccess = ({ accessToken, refreshToken, user_id }) => {
  console.log("login success action");
  console.log({ accessToken, refreshToken, user_id });

  return {
    type: LOGIN_SUCCESS,
    payload: { accessToken, refreshToken, user_id },
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
