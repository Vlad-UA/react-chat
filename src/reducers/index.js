import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import chats from './chatsReducer';
import messages from './messagesReducer';
import services from './servicesReducer';

export default combineReducers({
  authentication,
  chats,
  messages,
  services,
});

export const getActiveUser = state => state.authentication.user;
// eslint-disable-next-line
export const getUserId = user => user._id;

export const isCreator = (state, chat) => {
  try {
    return getUserId(chat.creator) === getUserId(getActiveUser(state));
  } catch (e) {
    return false;
  }
};

export const isMember = (state, chat) => {
  try {
    return chat.members.some(member => getUserId(member) === getUserId(getActiveUser(state)));
  } catch (e) {
    return false;
  }
};

export const isChatCreatorOrMember = (state, chat) =>
  isCreator(state, chat) || isMember(state, chat);
