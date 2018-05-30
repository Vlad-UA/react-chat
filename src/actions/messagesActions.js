import callApi from "../utils/call-api";
import {fetchChat} from "./chatsActions";
import * as chatsConstants from "../constants/messagesConstants";

export function sendMessage(chatId, content) {
  return (dispatch, getState) => {
    const {token} = getState().authentication;

    dispatch({
      type: chatsConstants.SEND_MESSAGE_REQUEST,
      payload: {chatId, content}
    });

    return callApi({
      endpoint: `/chats/${chatId}`,
      token,
      options: {method: 'POST'},
      payload: {data: {content}},
    })
      .then(data => {
        dispatch({
          type: chatsConstants.SEND_MESSAGE_SUCCESS,
          payload: data,
        });

        // Refetch messages from chat
        dispatch(fetchChat(chatId));
      })
      .catch(reason => dispatch({
        type: chatsConstants.SEND_MESSAGE_FAILURE,
        payload: reason,
      }));
  }
}
