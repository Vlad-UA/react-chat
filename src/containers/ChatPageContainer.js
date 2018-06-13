import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  fetchMyChats,
  fetchAllChats,
  setActiveChat,
  createChat,
  joinChat,
  leaveChat,
  deleteChat
} from '../actions/chatsActions';
import {editUserProfile} from '../actions/usersActions';
import {sendMessage, mountChat, unmountChat, socketConnect} from '../actions/socketsActions';
import {logout as onLogoutAction} from '../actions/authenticationActions';

import * as fromState from '../reducers';
import * as fromChats from '../reducers/chatsReducer';

import ChatPageView from '../components/chatPage/ChatPageView';

const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);

  return {
    isAuthenticated: state.authentication.isAuthenticated,
    chats: {
      active: activeChat,
      my: fromChats.getByIds(state.chats, state.chats.myIds),
      all: fromChats.getByIds(state.chats, state.chats.allIds),
    },
    activeUser: {
      ...state.authentication.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatCreatorOrMember: fromState.isChatCreatorOrMember(state, activeChat),
    },
    messagesList: state.messages,
    error: state.services.errors.chat,
    isConnected: state.services.isConnected,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  joinChat,
  deleteChat,
  leaveChat,
  editUserProfile,
  onLogoutAction,
  sendMessage,
  mountChat,
  unmountChat,
  socketConnect
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPageView);
