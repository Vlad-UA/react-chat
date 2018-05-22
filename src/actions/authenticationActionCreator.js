import {
  SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOCAL_STORAGE_TOKEN
} from '../const';
import fetch from 'isomorphic-fetch';

export function signup(username, password) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST
    });

    // console.log("action->signup");

    return fetch('http://localhost:8000/v1/signup', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(response => response.json())
      .then(json => {
        if (json.success) {
          return json
        }

        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token){
          throw new Error('Token has not been provided!');
        }

        localStorage.setItem(LOCAL_STORAGE_TOKEN, json.token);

        dispatch({
          type: SIGNUP_SUCCESS,
          payload: json,
        })
      })
      .catch(reason => dispatch({
        type: SIGNUP_FAILURE,
        payload: reason,
      }));
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });

    return fetch('http://localhost:8000/v1/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(response => response.json())
      .then(json => {
        if (json.success) {
          return json
        }

        throw new Error(json.message);
      })
      .then(json => {
        if (!json.token) {
          throw new Error('Token has not been provided!');
        }

        localStorage.setItem(LOCAL_STORAGE_TOKEN, json.token);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: json,
        })
      })
      .catch(reason => dispatch({
        type: LOGIN_FAILURE,
        payload: reason,
      }));
  };
}

export function loguot() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  };
}
