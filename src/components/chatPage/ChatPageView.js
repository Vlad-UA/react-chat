import React from 'react';

import {withStyles} from 'material-ui/styles';

import ChatsManager from './chatsManager/ChatsManager';
import MessageManager from './messagesManager/MessagesManager';
import ChatHeader from './chatHeader/ChatHeader';
import ErrorMessage from "../common/errorMessage";

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
    const {fetchAllChats, fetchMyChats, socketConnect, match, setActiveChat, mountChat} = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats()
    ])
      .then(() => {
        socketConnect();
      })
      .then(()=>{
        const {chatId} = match.params;

        if(chatId){
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {match: {params}, setActiveChat, unmountChat, mountChat} = this.props;
    const {params: nextParams} = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId);
    }
  }

  render() {
    const {classes, chats, activeUser, editUserProfile, onLogoutAction, messagesList, createChat, sendMessage, leaveChat, deleteChat, joinChat, error, isConnected} = this.props;

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
        <ErrorMessage error={error}/>
      </div>
    )
  }
}

export default withStyles(styles)(ChatPageView);
