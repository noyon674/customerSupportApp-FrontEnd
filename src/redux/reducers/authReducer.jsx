// src/redux/reducers/authReducer.js
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user_id: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  console.log("authReducer", state, action.type); // Add logging here

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        user_id: action.payload.user_id,
        loading: false,
        error: null,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user_id: null,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user_id: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
