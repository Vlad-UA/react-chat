import React from 'react';

import {withStyles} from 'material-ui/styles';

import ChatsManager from './chatsManager/ChatsManager';
import MessageManager from './messagesManager/MessageManager';
import ApplicationHeader from './applicationHeader/ApplicationHeader';

import {chats as chatsList, messages as messagesList} from '../mock-data';

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

const App = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <ChatsManager chatsList={chatsList} classAdditional={classes.chatsManager}/>
      <div className={classes.rightBlock}>
        <ApplicationHeader classAdditional={classes.applicationHeader}/>
        <MessageManager messagesList={messagesList} classAdditional={classes.messageManager}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(App);
