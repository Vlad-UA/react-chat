import {combineReducers} from 'redux';
import authentication from './authenticationReducer';
import chats from './chatsReducer';
import messages from './messagesReducer';

export default combineReducers({
  authentication,
  chats,
  messages,
})

export const getActiveUser = state => state.authentication.user;
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
    return chat.members.some(
      member => getUserId(member) === getUserId(getActiveUser(state))
    );
  } catch (e) {
    return false;
  }
};

export const isChatCreatorOrMember = (state, chat) => {
  return isCreator(state, chat) || isMember(state, chat);
};
