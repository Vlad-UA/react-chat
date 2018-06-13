import {combineReducers} from 'redux';
import * as authenticationConstants from '../constants/authenticationConstants';
import * as userConstants from '../constants/userConstants';
import * as chatsConstants from '../constants/chatsConstants';
import * as socketsConstants from '../constants/socketsConstants';

const initialState = {
  isFetching: {
    signup: false,
    login: false,
    logout: false,
    receiveAuth: false,
    allChats: false,
    myChats: false,
    chat: false,
    createChat: false,
    joinChat: false,
    leaveChat: false,
    deleteChat: false,
    sockets: false,
    editUser: false,
  },

  errors: {
    auth: null,
    chat: null,
  },

  isConnected: false,
};

export const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case authenticationConstants.SIGNUP_REQUEST:
      return {...state, signup: true};
    case authenticationConstants.LOGIN_REQUEST:
      return {...state, login: true};
    case authenticationConstants.LOGOUT_REQUEST:
      return {...state, logout: true};
    case authenticationConstants.RECEIVE_AUTH_REQUEST:
      return {...state, receiveAuth: true};
    case chatsConstants.FETCH_ALL_CHATS_REQUEST:
      return {...state, allChats: true};
    case chatsConstants.FETCH_MY_CHATS_REQUEST:
      return {...state, myChats: true};
    case chatsConstants.FETCH_CHAT_REQUEST:
      return {...state, chat: true};
    case chatsConstants.CREATE_CHAT_REQUEST:
      return {...state, createChat: true};
    case chatsConstants.JOIN_CHAT_REQUEST:
      return {...state, joinChat: true};
    case chatsConstants.LEAVE_CHAT_REQUEST:
      return {...state, leaveChat: true};
    case chatsConstants.DELETE_CHAT_REQUEST:
      return {...state, deleteChat: true};
    case socketsConstants.SOCKETS_CONNECTION_REQUEST:
      return {...state, sockets: true};
    case userConstants.EDIT_USER_PROFILE_REQUEST:
      return {...state, editUser: true};

    case authenticationConstants.SIGNUP_SUCCESS:
    case authenticationConstants.SIGNUP_FAILURE:
      return {...state, signup: false};
    case authenticationConstants.LOGIN_SUCCESS:
    case authenticationConstants.LOGIN_FAILURE:
      return {...state, login: false};
    case authenticationConstants.LOGOUT_SUCCESS:
    case authenticationConstants.LOGOUT_FAILURE:
      return {...state, logout: false};
    case authenticationConstants.RECEIVE_AUTH_SUCCESS:
    case authenticationConstants.RECEIVE_AUTH_FAILURE:
      return {...state, receiveAuth: false};
    case chatsConstants.FETCH_ALL_CHATS_SUCCESS:
    case chatsConstants.FETCH_ALL_CHATS_FAILURE:
      return {...state, allChats: false};
    case chatsConstants.FETCH_MY_CHATS_SUCCESS:
    case chatsConstants.FETCH_MY_CHATS_FAILURE:
      return {...state, myChats: false};
    case chatsConstants.FETCH_CHAT_SUCCESS:
    case chatsConstants.FETCH_CHAT_FAILURE:
      return {...state, chat: false};
    case chatsConstants.CREATE_CHAT_SUCCESS:
    case chatsConstants.CREATE_CHAT_FAILURE:
      return {...state, createChat: false};
    case chatsConstants.JOIN_CHAT_SUCCESS:
    case chatsConstants.JOIN_CHAT_FAILURE:
      return {...state, joinChat: false};
    case chatsConstants.LEAVE_CHAT_SUCCESS:
    case chatsConstants.LEAVE_CHAT_FAILURE:
      return {...state, leaveChat: false};
    case chatsConstants.DELETE_CHAT_SUCCESS:
    case chatsConstants.DELETE_CHAT_FAILURE:
      return {...state, deleteChat: false};
    case socketsConstants.SOCKETS_CONNECTION_SUCCESS:
    case socketsConstants.SOCKETS_CONNECTION_FAILURE:
      return {...state, sockets: false};
    case userConstants.EDIT_USER_PROFILE_SUCCESS:
    case userConstants.EDIT_USER_PROFILE_FAILURE:
      return {...state, editUser: false};
    default:
      return state;
  }
};

export const errors = (state = initialState.errors, action) => {
  switch (action.type) {
    case authenticationConstants.SIGNUP_FAILURE:
    case authenticationConstants.LOGIN_FAILURE:
    case authenticationConstants.LOGOUT_FAILURE:
      return {
        ...state,
        auth: action.payload
      };
    case authenticationConstants.SIGNUP_SUCCESS:
    case authenticationConstants.LOGIN_SUCCESS:
    case authenticationConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        auth: null
      };
    case chatsConstants.FETCH_ALL_CHATS_FAILURE:
    case chatsConstants.FETCH_MY_CHATS_FAILURE:
    case chatsConstants.FETCH_CHAT_FAILURE:
    case chatsConstants.CREATE_CHAT_FAILURE:
    case chatsConstants.JOIN_CHAT_FAILURE:
    case chatsConstants.LEAVE_CHAT_FAILURE:
    case chatsConstants.DELETE_CHAT_FAILURE:
    case socketsConstants.SOCKETS_CONNECTION_FAILURE:
    case userConstants.EDIT_USER_PROFILE_FAILURE:
      return {...state, chat: action.payload};
    case chatsConstants.FETCH_ALL_CHATS_SUCCESS:
    case chatsConstants.FETCH_MY_CHATS_SUCCESS:
    case chatsConstants.FETCH_CHAT_SUCCESS:
    case chatsConstants.CREATE_CHAT_SUCCESS:
    case chatsConstants.JOIN_CHAT_SUCCESS:
    case chatsConstants.LEAVE_CHAT_SUCCESS:
    case chatsConstants.DELETE_CHAT_SUCCESS:
    case socketsConstants.SOCKETS_CONNECTION_SUCCESS:
    case userConstants.EDIT_USER_PROFILE_SUCCESS:
      return {...state, chat: null};
    default:
      return state;
  }
};

export const isConnected = (state = initialState.isConnected, action) => {
  switch (action.type) {
    case socketsConstants.SOCKETS_CONNECTION_FAILURE:
    case socketsConstants.SOCKETS_CONNECTION_MISSING:
      return false;
    case socketsConstants.SOCKETS_CONNECTION_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  errors,
  isConnected,
})
