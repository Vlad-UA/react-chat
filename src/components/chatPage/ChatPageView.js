import React from 'react';

import {withStyles} from 'material-ui/styles';

import ChatsManager from './chatsManager/ChatsManager';
import MessageManager from './messagesManager/MessagesManager';
import ChatHeader from './chatHeader/ChatHeader';

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
    width: `calc(100% - 320px)`,
  },

  messageManager: {
    position: 'relative',
    top: 87,
    height: 'calc(100% - 26px)'
  },
});

class ChatPageView extends React.Component {

  componentDidMount() {
    const {fetchAllChats, fetchMyChats} = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ]);
  }

  componentWillReceiveProps(nextProps) {
    const {match: {params}, setActiveChat} = this.props;
    const {params: nextParams} = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const {classes, chats, activeUser, editUserProfile, onLogoutAction, messagesList, createChat, sendMessage, leaveChat, deleteChat, joinChat} = this.props;

    return (
      <div className={classes.root}>
        <ChatsManager
          chats={chats}
          classAdditional={classes.chatsManager}
          createChatAction={createChat}
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
          />
          <MessageManager
            messagesList={messagesList}
            classAdditional={classes.messageManager}
            isActiveChatExists={!!chats.active}
            activeUser={activeUser}
            sendMessage={(messageText) => sendMessage(chats.active._id, messageText)}
            activeChat={chats.active}
            joinChat={joinChat}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ChatPageView);
