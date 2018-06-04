import React from 'react';

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ChatMenu from './ChatMenu';

import UserAccountButton from './UserAccountButton';
import Avatar from '../common/Avatar';

const styles = theme => ({
  userAccountButton: {
    position: 'absolute',
    right: 20,
    top: 6,
  },
  appBarTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
    lineHeight: '40px',
  },
  chatInfoAndManage:{
    display: 'flex',
  },
});

const ChatHeader = ({classes, classAdditional, activeUser, onLogoutAction, editUserProfile, activeChat, leaveChat, deleteChat, isConnected}) => {
  return (
    <AppBar className={classAdditional}>
      <Toolbar>
        {activeChat
          ? <div className={classes.chatInfoAndManage}>
            <Avatar title={activeChat.title} lettersQuantity={1} colorFrom={activeChat.title}/>
            <Typography variant="title" className={classes.appBarTitle}>
              {activeChat.title}
            </Typography>
            <ChatMenu
              disabled={!isConnected}
              activeUser={activeUser}
              onLeaveClick={() => leaveChat(activeChat._id)}
              onDeleteClick={() => deleteChat(activeChat._id)}
            />
          </div>
          : <Typography variant="title" color="inherit" noWrap>
            DogeCodes React Chat
          </Typography>
        }
        <UserAccountButton
          disabled={!isConnected}
          classAdditional={classes.userAccountButton}
          activeUser={activeUser}
          onLogoutAction={onLogoutAction}
          editUserProfile={editUserProfile}
        />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(ChatHeader);
