import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Avatar from '../common/Avatar';

const styles = () => ({
  isActive: {
    backgroundColor: '#C7EDFC',
  },
});

const ChatItem = ({
  classes, title, chatId, isActive, createdAt, disabled,
}) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
    className={isActive ? classes.isActive : ''}
    disabled={disabled}
  >
    <Avatar title={title} lettersQuantity={2} colorFrom={title} />
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
  </ListItem>
);

ChatItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  createdAt: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
ChatItem.defaultProps = {
  isActive: null,
};

export default withStyles(styles)(ChatItem);
