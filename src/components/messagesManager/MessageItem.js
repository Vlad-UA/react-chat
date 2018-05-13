import React from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import titleInitial from '../../utils/title-initials';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  }),

  myMessageListItem: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  myMessagePaper: {
    backgroundColor: '#C7EDFC',
  },
});

class MessageItem extends React.Component {
  render() {
    const {classes, message} = this.props;

    const isMessageFromMe = message.sender === "me";

    return (
      <ListItem className={classNames(isMessageFromMe && classes.myMessageListItem)}>
        <Avatar>
          {titleInitial({title: message.sender, lettersQuantity: 1})}
        </Avatar>
        <Paper className={classNames(classes.paper, isMessageFromMe && classes.myMessagePaper)} elevation={4}>
          <Typography component="p">
            {message.sender}
          </Typography>
          <Typography variant="headline" component="p">
            {message.content}
          </Typography>
        </Paper>
      </ListItem>
    )
  }
}

export default withStyles(styles)(MessageItem);
