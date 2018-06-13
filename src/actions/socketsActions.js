import SocketIOClient from 'socket.io-client';
import * as socketsConstants from '../constants/socketsConstants';
import { redirect } from './servicesActions';
import { getChatId } from '../reducers/chatsReducer';
import config from '../config';

export function missingSocketConnection() {
  return {
    type: socketsConstants.SOCKETS_CONNECTION_MISSING,
    payload: new Error('Missing connection!'),
  };
}

let socket = null;

export function socketConnect() {
  return (dispatch, getState) => {
    const state = getState();
    const { token } = state.authentication;
    const { isFetching } = state.services;

    if (isFetching.sockets) {
      return Promise.resolve();
    }

    dispatch({
      type: socketsConstants.SOCKETS_CONNECTION_REQUEST,
    });

    socket = SocketIOClient(config.SOCKETS_URI, {
      query: { token },
    });

    socket.on('connect', () => {
      dispatch({
        type: socketsConstants.SOCKETS_CONNECTION_SUCCESS,
      });
    });

    socket.on('error', (error) => {
      dispatch({
        type: socketsConstants.SOCKETS_CONNECTION_FAILURE,
        payload: new Error(`Connection: ${error}`),
      });
    });

    socket.on('connect_error', () => {
      dispatch({
        type: socketsConstants.SOCKETS_CONNECTION_FAILURE,
        payload: new Error('We have lost a connection :('),
      });
    });

    socket.on('new-message', (message) => {
      dispatch({
        type: socketsConstants.RECEIVE_MESSAGE,
        payload: message,
      });
    });

    socket.on('new-chat', ({ chat }) => {
      dispatch({
        type: socketsConstants.RECEIVE_NEW_CHAT,
        payload: { chat },
      });
    });

    socket.on('deleted-chat', ({ chat }) => {
      const { activeId } = getState().chats;

      dispatch({
        type: socketsConstants.RECEIVE_DELETED_CHAT,
        payload: { chat },
      });

      if (activeId === getChatId(chat)) {
        dispatch(redirect('/chat'));
      }
    });
    return Promise.resolve();
  };
}

export function sendMessage(content) {
  return (dispatch, getState) => {
    const { activeId } = getState().chats;

    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit(
      'send-message',
      {
        chatId: activeId,
        content,
      },
      () => {
        dispatch({
          type: socketsConstants.SEND_MESSAGE,
          payload: {
            chatId: activeId,
            content,
          },
        });
      },
    );
  };
}

export function mountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('mount-chat', chatId);

    dispatch({
      type: socketsConstants.MOUNT_CHAT,
      payload: { chatId },
    });
  };
}

export function unmountChat(chatId) {
  return (dispatch) => {
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('unmount-chat', chatId);

    dispatch({
      type: socketsConstants.UNMOUNT_CHAT,
      payload: { chatId },
    });
  };
}
