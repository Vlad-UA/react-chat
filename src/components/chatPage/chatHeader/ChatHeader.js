import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ChatMenu from './ChatMenu';
import UserAccountButton from './UserAccountButton';
import Avatar from '../common/Avatar';
import { getChatId } from '../../../reducers/chatsReducer';

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
  chatInfoAndManage: {
    display: 'flex',
  },
});

const ChatHeader = ({
  classes,
  classAdditional,
  activeUser,
  onLogoutAction,
  editUserProfile,
  activeChat,
  leaveChat,
  deleteChat,
  isConnected,
}) => (
  <AppBar className={classAdditional}>
    <Toolbar>
      {activeChat ? (
        <div className={classes.chatInfoAndManage}>
          <Avatar title={activeChat.title} lettersQuantity={1} colorFrom={activeChat.title} />
          <Typography variant="title" className={classes.appBarTitle}>
            {activeChat.title}
          </Typography>
          <ChatMenu
            disabled={!isConnected}
            activeUser={activeUser}
            onLeaveClick={() => leaveChat(getChatId(activeChat))}
            onDeleteClick={() => deleteChat(getChatId(activeChat))}
          />
        </div>
      ) : (
        <Typography variant="title" color="inherit" noWrap>
          DogeCodes React Chat
        </Typography>
      )}
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

ChatHeader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  classAdditional: PropTypes.string,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool,
  }).isRequired,
  onLogoutAction: PropTypes.func.isRequired,
  editUserProfile: PropTypes.func.isRequired,
  activeChat: PropTypes.shape({
    title: PropTypes.string,
    _id: PropTypes.string,
  }),
  leaveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

ChatHeader.defaultProps = {
  activeChat: null,
  classAdditional: '',
};

export default withStyles(styles)(ChatHeader);
