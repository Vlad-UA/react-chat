import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import AvatarItem from '../common/Avatar';
import senderName from '../../../utils/senderName';
import colorFrom from '../../../utils/getColorFrom';
import { getSenderId } from '../../../reducers/messagesReducer';
import { getActiveUserId } from '../../../reducers/authenticationReducer';

const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    minWidth: '10%',
    maxWidth: '70%',
  }),

  myMessageListItem: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  myMessagePaper: {
    backgroundColor: '#C7EDFC',
  },
  statusMessage: {
    width: '100%',
    textAlign: 'center',
  },
  statusMessageUser: {
    display: 'inline',
  },
});

const MessageItem = ({
  classes, sender, content, activeUser, statusMessage, createdAt,
}) => {
  const isMessageFromMe = getSenderId(sender) === getActiveUserId(activeUser);

  const displayedName = senderName(sender);

  if (statusMessage) {
    return (
      <div className={classes.root}>
        <Typography className={classes.statusMessage}>
          <Typography
            variant="caption"
            style={{ color: colorFrom(getSenderId(sender)) }}
            className={classes.statusMessageUser}
          >
            {displayedName}
          </Typography>
          {content}
          <Typography variant="caption" component="span">
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }

  return (
    <ListItem className={classNames(classes.root, isMessageFromMe && classes.myMessageListItem)}>
      <AvatarItem title={displayedName} lettersQuantity={1} colorFrom={getSenderId(sender)} />
      <Paper
        className={classNames(classes.paper, isMessageFromMe && classes.myMessagePaper)}
        elevation={4}
      >
        <Typography component="p" variant="caption">
          {displayedName}
        </Typography>
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </Paper>
    </ListItem>
  );
};

MessageItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sender: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  content: PropTypes.string.isRequired,
  activeUser: PropTypes.shape({
    _id: PropTypes.string,
  }).isRequired,
  statusMessage: PropTypes.bool,
  createdAt: PropTypes.string.isRequired,
};
MessageItem.defaultProps = {
  statusMessage: null,
};


export default withStyles(styles)(MessageItem);
