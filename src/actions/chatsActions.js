import * as chatsConstants from '../constants/chatsConstants';
import callApi from '../utils/call-api';
import {redirect} from './servicesActions';

export function fetchMyChats() {
  return (dispatch, getState) => {
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.myChats) {
      return Promise.resolve();
    }

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
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.allChats) {
      return Promise.resolve();
    }

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
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.chat) {
      return Promise.resolve();
    }

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
  return (dispatch, getState) => {
    return dispatch(fetchChat(chatId))
      .then(data => {
        if (getState().services.isConnected) {
          if (!data) {
            dispatch(redirect('/chat'));

            return dispatch({
              type: chatsConstants.UNSET_ACTIVE_CHAT,
            });
          } else {
            dispatch({
              type: chatsConstants.SET_ACTIVE_CHAT,
              payload: data,
            });

            return dispatch(redirect(`/chat/${data.chat._id}`));
          }
        } else {
          return Promise.resolve();
        }
      });
  }
}

export function createChat(title) {
  return (dispatch, getState) => {
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.createChat) {
      return Promise.resolve();
    }

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
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.joinChat) {
      return Promise.resolve();
    }

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
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.leaveChat) {
      return Promise.resolve();
    }

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
    const state = getState();
    const {token} = state.authentication;
    const {isFetching} = state.services;

    if (isFetching.deleteChat) {
      return Promise.resolve();
    }

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
