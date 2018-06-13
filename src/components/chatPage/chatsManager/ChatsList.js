import React from 'react';
import classNames from "classnames";

import List from 'material-ui/List';
import Typography from 'material-ui/Typography';

import ChatItem from './ChatItem';
import {withStyles} from "material-ui/styles/index";

const styles = () => ({
  root: {
    borderTopWidth: '1px',
    borderTopColor: '#c5c5c5',
    borderTopStyle: 'double',

    borderBottomWidth: '1px',
    borderBottomColor: '#c5c5c5',
    borderBottomStyle: 'double',
  },
  noChatMessage: {
    textAlign: 'center',
  },
});

const ChatsList = ({classAdditional, chats, classes, disabled}) => {
  return (
    <List className={classNames(classes.root, classAdditional)}>
      {chats && chats.length > 0
        ? chats.map((chat) => <ChatItem
                                disabled={disabled}
                                key={chat._id}
                                isActive={chats.active && chats.active._id === chat._id}
                                chatId={chat._id}
                                {...chat}
                              />)
        : <Typography variant="subheading" className={classes.noChatMessage}>
          There is no chats yet...
        </Typography>
      }
    </List>
  );
}

export default withStyles(styles)(ChatsList);
