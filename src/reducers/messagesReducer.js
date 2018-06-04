import * as messagesConstants from '../constants/messagesConstants';
import * as chatsConstants from '../constants/chatsConstants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case messagesConstants.SEND_MESSAGE_SUCCESS:
      return [...state, action.payload.message];
    case chatsConstants.FETCH_CHAT_SUCCESS:
      return action.payload.chat.messages;
    default:
      return state;
  }
}
