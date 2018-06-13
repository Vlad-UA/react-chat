/* eslint no-use-before-define: 0 */

import { combineReducers } from 'redux';
import * as chatsConst from '../constants/chatsConstants';
import * as socketsConstants from '../constants/socketsConstants';

/**
 * @type {object}
 * @property {string} activeId - active chat ID
 * @property {Array.<string>} allIds - all chat IDs
 * @property {Array.<string>} myIds - my chat IDs
 * @property {ChatData} byIds - all chats
 *
 *
 * ChatData {object} example:
 *
 * [{string} - chat id, equal to _id]:{
 *    createdAt: {string},
 *    creator: {
 *        firstName: {string},
 *        lastName: {string},
 *        username: {string},
 *        _id: {string},
 *    },
 *    members: {array},
 *    title: {string},
 *    updatedAt: {string},
 *    __v: {number},
 *    _id: {string}
 * }
 */
const initialState = {
  activeId: null,
  allIds: [],
  myIds: [],
  byIds: {},
};

const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case chatsConst.SET_ACTIVE_CHAT:
    case chatsConst.JOIN_CHAT_SUCCESS:
      return getChatId(action.payload.chat);
    case chatsConst.UNSET_ACTIVE_CHAT:
      return null;
    case socketsConstants.RECEIVE_DELETED_CHAT:
      return state === getChatId(action.payload.chat) ? null : state;
    default:
      return state;
  }
};

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case chatsConst.FETCH_ALL_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case socketsConstants.RECEIVE_NEW_CHAT:
      return [...state, getChatId(action.payload.chat)];
    case socketsConstants.RECEIVE_DELETED_CHAT:
      return state.filter(chatId => chatId !== getChatId(action.payload.chat));
    default:
      return state;
  }
};

const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case chatsConst.FETCH_MY_CHATS_SUCCESS:
      return action.payload.chats.map(getChatId);
    case chatsConst.CREATE_CHAT_SUCCESS:
    case chatsConst.JOIN_CHAT_SUCCESS:
      return [...state, getChatId(action.payload.chat)];
    case chatsConst.LEAVE_CHAT_SUCCESS:
    case socketsConstants.RECEIVE_DELETED_CHAT:
      return state.filter(chatId => chatId !== getChatId(action.payload.chat));
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  let newState;
  switch (action.type) {
    case chatsConst.FETCH_ALL_CHATS_SUCCESS:
    case chatsConst.FETCH_MY_CHATS_SUCCESS:
      return {
        ...state,
        ...action.payload.chats.reduce(
          (ids, chat) => ({
            ...ids,
            [getChatId(chat)]: chat,
          }),
          {},
        ),
      };
    case chatsConst.LEAVE_CHAT_SUCCESS:
    case chatsConst.JOIN_CHAT_SUCCESS:
    case socketsConstants.RECEIVE_NEW_CHAT:
      return {
        ...state,
        [getChatId(action.payload.chat)]: action.payload.chat,
      };
    case socketsConstants.RECEIVE_DELETED_CHAT:
      newState = { ...state };
      delete newState[getChatId(action.payload.chat)];
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,
});

// eslint-disable-next-line
export const getChatId = chat => chat._id;
export const getById = (state, id) => state.byIds[id];
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
