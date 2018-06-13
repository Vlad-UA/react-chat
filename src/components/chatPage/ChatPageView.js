import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ChatsManager from './chatsManager/ChatsManager';
import MessageManager from './messagesManager/MessagesManager';
import ChatHeader from './chatHeader/ChatHeader';
import ErrorMessage from '../common/ErrorMessage';

const styles = () => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },

  chatsManager: {
    position: 'relative',
    width: 320,
  },

  rightBlock: {
    height: '95vh',
    // used for centering message when there are no messages in the chat
    width: '100%',
  },

  applicationHeader: {
    width: 'calc(100% - 320px)',
  },

  messageManager: {
    position: 'relative',
    top: 87,
    height: 'calc(100% - 26px)',
  },
});

class ChatPageView extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    fetchAllChats: PropTypes.func.isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketConnect: PropTypes.func,
    mountChat: PropTypes.func.isRequired,
    unmountChat: PropTypes.func.isRequired,
    onLogoutAction: PropTypes.func.isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool,
    }).isRequired,
    createChat: PropTypes.func.isRequired,
    joinChat: PropTypes.func.isRequired,
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    messagesList: PropTypes.arrayOf(PropTypes.shape({
      chatId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      sender: PropTypes.object.isRequired,
      createdAt: PropTypes.string.isRequired,
    })).isRequired,
    editUserProfile: PropTypes.func.isRequired,
    error: PropTypes.instanceOf(Error),
    isConnected: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    error: null,
    socketConnect: null,
  };

  componentDidMount() {
    const {
      fetchAllChats,
      fetchMyChats,
      socketConnect,
      match,
      setActiveChat,
      mountChat,
    } = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketConnect();
      })
      .then(() => {
        const { chatId } = match.params;

        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
      unmountChat,
      mountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }

  render() {
    const {
      classes,
      chats,
      activeUser,
      editUserProfile,
      onLogoutAction,
      messagesList,
      createChat,
      sendMessage,
      leaveChat,
      deleteChat,
      joinChat,
      error,
      isConnected,
    } = this.props;

    return (
      <div className={classes.root}>
        <ChatsManager
          chats={chats}
          classAdditional={classes.chatsManager}
          createChatAction={createChat}
          isConnected={isConnected}
        />
        <div className={classes.rightBlock}>
          <ChatHeader
            classAdditional={classes.applicationHeader}
            activeUser={activeUser}
            editUserProfile={editUserProfile}
            onLogoutAction={onLogoutAction}
            activeChat={chats.active}
            leaveChat={leaveChat}
            deleteChat={deleteChat}
            isConnected={isConnected}
          />
          <MessageManager
            messagesList={messagesList}
            classAdditional={classes.messageManager}
            isActiveChatExists={!!chats.active}
            activeUser={activeUser}
            sendMessage={sendMessage}
            activeChat={chats.active}
            joinChat={joinChat}
            isConnected={isConnected}
          />
        </div>
        <ErrorMessage error={error} />
      </div>
    );
  }
}

export default withStyles(styles)(ChatPageView);
