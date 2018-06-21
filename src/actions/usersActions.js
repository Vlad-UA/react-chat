import * as userConstants from '../constants/userConstants';
import callApi from '../utils/call-api';

// eslint-disable-next-line
export function editUserProfile({username, firstName, lastName}) {
  return (dispatch, getState) => {
    const state = getState();
    const { token } = state.authentication;
    const { isFetching } = state.services;

    if (isFetching.editUser) {
      return Promise.resolve();
    }

    dispatch({
      type: userConstants.EDIT_USER_PROFILE_REQUEST,
    });

    return callApi({
      endpoint: '/users/me',
      token,
      options: { method: 'POST' },
      payload: { data: { username, firstName, lastName } },
    })
      .then(json =>
        dispatch({
          type: userConstants.EDIT_USER_PROFILE_SUCCESS,
          payload: json,
        }))
      .catch(reason =>
        dispatch({
          type: userConstants.EDIT_USER_PROFILE_FAILURE,
          payload: reason,
        }));
  };
}
