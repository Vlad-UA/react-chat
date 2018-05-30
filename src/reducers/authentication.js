import {
  SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOCAL_STORAGE_TOKEN
} from '../const';

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

const initialState = {
  isAuthenticated: !! token,
  user: null,
  token
};

export default function authentication(stateAuthentication = initialState, action) {
  // console.log("reducer authentication", action, action.payload);

  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...stateAuthentication,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return {
        ...stateAuthentication,
        isAuthenticated: false,
        user: null,
        token: ''
      };
    default:
      return stateAuthentication;
  }
}
