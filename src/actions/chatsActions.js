import * as chatsConstants from '../constants/chatsConstants';
import callApi from '../utils/call-api';
import {redirect} from '../actions/services';


export function fetchMyChats() {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.FETCH_MY_CHATS_REQUEST
    });

    return callApi({
      endpoint: '/chats/my',
      token,
    }).then(data =>
      dispatch({
        type: chatsConstants.FETCH_MY_CHATS_SUCCESS,
        payload: data
      })
    ).catch(reason =>
      dispatch({
        type: chatsConstants.FETCH_MY_CHATS_FAILURE,
        payload: reason
      })
    );
  }
}

export function fetchAllChats() {
  return (dispatch, getState) => {

    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.FETCH_ALL_CHATS_REQUEST
    });

    return callApi({
      endpoint: '/chats',
      token,
    }).then(data =>
      dispatch({
        type: chatsConstants.FETCH_ALL_CHATS_SUCCESS,
        payload: data
      })
    ).catch(reason =>
      dispatch({
        type: chatsConstants.FETCH_ALL_CHATS_FAILURE,
        payload: reason
      })
    );
  }
}

export function fetchChat(chatId) {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.FETCH_CHAT_REQUEST
    });

    return callApi({
      endpoint: `/chats/${chatId}`,
      token,
    }).then(data => {
        dispatch({
          type: chatsConstants.FETCH_CHAT_SUCCESS,
          payload: data
        });

        return data;
      }
    ).catch(reason =>
      dispatch({
        type: chatsConstants.FETCH_CHAT_FAILURE,
        payload: reason
      })
    );
  }
}

export function setActiveChat(chatId) {
  return (dispatch) => {
    return dispatch(fetchChat(chatId))
      .then(data => {
        if (!data) {
          dispatch(redirect('/chat'));

          return dispatch({
            type: chatsConstants.UNSET_ACTIVE_CHAT,
          });
        }

        dispatch({
          type: chatsConstants.SET_ACTIVE_CHAT,
          payload: data,
        });
      });
  }
}

export function createChat(title) {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.CREATE_CHAT_REQUEST,
      payload: {title}
    });

    return callApi({
        endpoint: '/chats',
        token,
        options: {method: 'POST'},
        payload: {data: {title}}
      }
    )
      .then(({chat}) => {
        dispatch({
          type: chatsConstants.CREATE_CHAT_SUCCESS,
          payload: {chat},
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason => dispatch({
        type: chatsConstants.CREATE_CHAT_FAILURE,
        payload: reason,
      }));
  };
}

export function joinChat(chatId) {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.JOIN_CHAT_REQUEST,
      payload: {chatId}
    });

    return callApi({
      endpoint: `/chats/${chatId}/join`,
      token,
    })
      .then(({chat}) => {
        dispatch({
          type: chatsConstants.JOIN_CHAT_SUCCESS,
          payload: {chat}
        });

        dispatch(redirect(`/chat/${chat._id}`));

        return chat;
      })
      .catch(reason => dispatch({
        type: chatsConstants.JOIN_CHAT_FAILURE,
        payload: reason,
      }));
  };
}

export function leaveChat(chatId) {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.LEAVE_CHAT_REQUEST,
      payload: {chatId}
    });

    return callApi({
      endpoint: `/chats/${chatId}/leave`,
      token
    })
      .then(data => {
        dispatch({
          type: chatsConstants.LEAVE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        dispatch({
          type: chatsConstants.UNSET_ACTIVE_CHAT,
        });

        return data;
      })
      .catch(reason => dispatch({
        type: chatsConstants.LEAVE_CHAT_FAILURE,
        payload: reason,
      }));
  }
}

export function deleteChat(chatId) {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.DELETE_CHAT_REQUEST,
      payload: {chatId}
    });

    return callApi({
      endpoint: `/chats/${chatId}`,
      token,
      options: {method: 'DELETE'},
    })
      .then(data => {
        dispatch({
          type: chatsConstants.DELETE_CHAT_SUCCESS,
          payload: data,
        });

        dispatch(redirect('/chat'));

        dispatch({
          type: chatsConstants.UNSET_ACTIVE_CHAT,
        });

        return data;
      })
      .catch(reason => dispatch({
        type: chatsConstants.DELETE_CHAT_FAILURE,
        payload: reason,
      }));
  }
}
