import * as authConst from '../constants/authenticationConstants';
import * as localStorageConst from '../constants/localStorageConstants';
import callApi from '../utils/call-api';

export function signup(username, password) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.signup) {
      return Promise.resolve();
    }

    dispatch({
      type: authConst.SIGNUP_REQUEST,
    });

    return callApi({
      endpoint: '/signup',
      payload: {
        username,
        password,
      },
      options: {
        method: 'POST',
      },
    })
      .then((json) => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        localStorage.setItem(localStorageConst.LOCAL_STORAGE_TOKEN, json.token);

        dispatch({
          type: authConst.SIGNUP_SUCCESS,
          payload: json,
        });
      })
      .catch(reason =>
        dispatch({
          type: authConst.SIGNUP_FAILURE,
          payload: reason,
        }));
  };
}

export function login(username, password) {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.login) {
      return Promise.resolve();
    }

    dispatch({
      type: authConst.LOGIN_REQUEST,
    });

    return callApi({
      endpoint: '/login',
      payload: {
        username,
        password,
      },
      options: {
        method: 'POST',
      },
    })
      .then((json) => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        localStorage.setItem(localStorageConst.LOCAL_STORAGE_TOKEN, json.token);

        dispatch({
          type: authConst.LOGIN_SUCCESS,
          payload: json,
        });
      })
      .catch(reason =>
        dispatch({
          type: authConst.LOGIN_FAILURE,
          payload: reason,
        }));
  };
}

export function logout() {
  return (dispatch, getState) => {
    const { isFetching } = getState().services;

    if (isFetching.logout) {
      return Promise.resolve();
    }

    dispatch({
      type: authConst.LOGOUT_REQUEST,
    });

    return callApi({
      endpoint: '/logout',
    })
      .then((json) => {
        localStorage.removeItem(localStorageConst.LOCAL_STORAGE_TOKEN);

        dispatch({
          type: authConst.LOGOUT_SUCCESS,
          payload: json,
        });
      })
      .catch(reason =>
        dispatch({
          type: authConst.LOGOUT_FAILURE,
          payload: reason,
        }));
  };
}

export function receiveAuth() {
  return (dispatch, getState) => {
    const { token } = getState().authentication;

    const { isFetching } = getState().services;

    if (isFetching.receiveAuth) {
      return Promise.resolve();
    }

    if (!token) {
      dispatch({
        type: authConst.RECEIVE_AUTH_REQUEST,
      });
    }

    return callApi({
      endpoint: '/users/me',
      token,
    })
      .then(json =>
        dispatch({
          type: authConst.RECEIVE_AUTH_SUCCESS,
          payload: json,
        }))
      .catch(reason =>
        dispatch({
          type: authConst.RECEIVE_AUTH_FAILURE,
          payload: reason,
        }));
  };
}
