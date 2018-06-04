import React from 'react';

import {Link} from 'react-router-dom';

import {ListItem, ListItemText} from 'material-ui/List';
import {withStyles} from "material-ui/styles/index";
import moment from 'moment';

import AvatarItem from "../common/Avatar";

const styles = () => ({
  isActive: {
    backgroundColor: '#C7EDFC',
  },
});

class ChatItem extends React.Component {
  render() {
    const {classes, title, chatId, isActive, createdAt} = this.props;

    // TODO check  disabled={disabled} for <ListItem>
    return (
      <ListItem
        button
        component={Link}
        to={`/chat/${chatId}`}
        className={isActive ? classes.isActive : ''}
      >
        <AvatarItem
          title={title}
          lettersQuantity={2}
          colorFrom={title}
        />
        <ListItemText primary={title} secondary={moment(createdAt).fromNow()}/>
      </ListItem>
    );
  }
}

export default withStyles(styles)(ChatItem);
