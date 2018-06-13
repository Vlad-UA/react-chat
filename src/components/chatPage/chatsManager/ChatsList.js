import React from 'react';
import classNames from 'classnames';
import List from 'material-ui/List';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles/index';
import ChatItem from './ChatItem';
import { getChatId } from '../../../reducers/chatsReducer';

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

const ChatsList = ({
  classAdditional, chats, classes, disabled,
}) => (
  <List className={classNames(classes.root, classAdditional)}>
    {chats && chats.length > 0 ? (
      chats.map(chat => (
        <ChatItem
          disabled={disabled}
          key={getChatId(chat)}
          isActive={chats.active && getChatId(chats.active) === getChatId(chat)}
          chatId={getChatId(chat)}
          {...chat}
        />
      ))
    ) : (
      <Typography variant="subheading" className={classes.noChatMessage}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

ChatsList.propTypes = {
  classAdditional: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool.isRequired,
};
ChatsList.defaultProps = {
  classAdditional: '',
};

export default withStyles(styles)(ChatsList);
