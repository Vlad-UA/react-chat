import * as chatsConstants from '../constants/chatsConstants';
import * as socketsConstants from '../constants/socketsConstants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case socketsConstants.RECEIVE_MESSAGE:
      return [...state, action.payload.message];
    case chatsConstants.FETCH_CHAT_SUCCESS:
      return action.payload.chat.messages;
    default:
      return state;
  }
};

// eslint-disable-next-line
export const getSenderId = sender => sender._id;
// eslint-disable-next-line
export const getMessageId = message => message._id;
