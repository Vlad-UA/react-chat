import React from 'react';

import {withStyles} from 'material-ui/styles';

import ChatsManager from './components/chatsManager/ChatsManager';
import MessageManager from './components/messagesManager/MessageManager';
import ApplicationHeader from './components/applicationHeader/ApplicationHeader';

import {chats as chatsList, messages as messagesList} from './mock-data';

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

class PermanentDrawer extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <ChatsManager chatsList={chatsList} classAdditional={classes.chatsManager}/>
        <span className={classes.rightBlock}>
          <ApplicationHeader classAdditional={classes.applicationHeader}/>
          <MessageManager messagesList={messagesList} classAdditional={classes.messageManager}/>
        </span>
      </div>
    );
  }
}

export default withStyles(styles)(PermanentDrawer);
