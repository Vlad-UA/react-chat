import * as authConst from '../constants/authenticationConstants';
import * as userConstants from '../constants/userConstants';
import * as localStorageConst from '../constants/localStorageConstants';

const token = localStorage.getItem(localStorageConst.LOCAL_STORAGE_TOKEN);

/**
 *@type {object}
 *@property {boolean} isAuthenticated
 *@property {string} token
 *@property {object} user
 *@property {string} user._id
 *@property {string} user.username
 *@property {string} user.lastName
 *@property {string} user.firstName
 */
const initialState = {
  isAuthenticated: !!token,
  token,
  user: null,
};

export default function authentication(stateAuthentication = initialState, action) {
  switch (action.type) {
    case userConstants.EDIT_USER_PROFILE_SUCCESS:
      return {
        ...stateAuthentication,
        user: action.payload.user,
      };
    case authConst.SIGNUP_SUCCESS:
    case authConst.LOGIN_SUCCESS:
      return {
        ...stateAuthentication,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case authConst.RECEIVE_AUTH_SUCCESS:
      return {
        ...stateAuthentication,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case authConst.SIGNUP_FAILURE:
    case authConst.LOGIN_FAILURE:
    case authConst.LOGOUT_SUCCESS:
    case authConst.RECEIVE_AUTH_FAILURE:
      return {
        ...stateAuthentication,
        isAuthenticated: false,
        user: null,
        token: '',
      };
    default:
      return stateAuthentication;
  }
}

// eslint-disable-next-line
export const getActiveUserId = activeUser => activeUser._id;
