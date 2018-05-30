import React from 'react';
import classNames from 'classnames';

import {withStyles} from 'material-ui/styles';
import {ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import AvatarItem from "../common/Avatar";

const styles = theme => ({
  root:{
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
});

const MessageItem = ({classes, sender, content}) => {
  const isMessageFromMe = sender === "me";

  return (
    <ListItem className={classNames(classes.root, isMessageFromMe && classes.myMessageListItem)}>
      <AvatarItem title={sender} lettersQuantity={1} colorFrom={sender}/>
      <Paper className={classNames(classes.paper, isMessageFromMe && classes.myMessagePaper)} elevation={4}>
        <Typography component="p" variant="caption">
          {sender}
        </Typography>
        <Typography variant="body1" component="p">
          {content}
        </Typography>
      </Paper>
    </ListItem>
  )
};

export default withStyles(styles)(MessageItem);
