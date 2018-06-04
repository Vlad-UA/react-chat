import React from 'react';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import MessageList from './MessagesList';
import MessageTypeNew from './MessageTypeNew';
import Grid from 'material-ui/Grid';

import classNames from "classnames";

const styles = theme => ({
  messageList: {
    height: 'calc(100% - 133px)'
  },
  messageTypeNew: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 20,
  },
  thereIsNoMessagesRoot: {
    alignItems: 'center',
  },
  thereIsNoMessagesBlock: {
    padding: theme.spacing.unit * 3,
  },
});

const MessagesManager = ({classAdditional, messagesList, classes, sendMessage, isActiveChatExists, activeUser, joinChat, activeChat, isConnected}) => {
  if (isActiveChatExists) {
    return (
      <div className={classAdditional}>
        <MessageList messagesList={messagesList} classAdditional={classes.messageList} activeUser={activeUser}/>
        <MessageTypeNew
          disabled={!isConnected}
          classAdditional={classes.messageTypeNew}
          sendMessage={sendMessage}
          showJoinButton={!activeUser.isChatCreatorOrMember}
          onJoinButtonClick={() => joinChat(activeChat._id)} />
      </div>
    );
  } else {
    return (
      <Grid container justify="center" className={classNames(classAdditional, classes.thereIsNoMessagesRoot)}>
        <Grid item>
          <Paper className={classNames(classes.thereIsNoMessagesBlock)}>
            <Typography variant="display1" gutterBottom>
              Start messaging…
            </Typography>
            <Typography variant="body1" gutterBottom>
              Use <strong>Global</strong> to explore communities around here.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Use <strong>Recent</strong> to see your recent conversations.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
};

export default withStyles(styles)(MessagesManager);
