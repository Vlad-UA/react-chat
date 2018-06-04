import * as userConstants from '../constants/userConstants';
import callApi from '../utils/call-api';

export function editUserProfile({username, firstName, lastName}) {
  return (dispatch, getState) => {
    const state = getState();
    const {token} = state.authentication;

    dispatch({
      type: userConstants.EDIT_USER_PROFILE_REQUEST,
    });

    return callApi({
      endpoint: '/users/me',
      token,
      options: {method: 'POST'},
      payload: {data: {username, firstName, lastName},},
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
