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
import {sendMessage} from '../actions/messagesActions';
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
  sendMessage
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPageView);
