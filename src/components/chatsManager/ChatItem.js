import React from 'react';

import {ListItem, ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import titleInitials from '../../utils/title-initials';


class ChatItem extends React.Component {
  render() {
    const {title} = this.props;

    return (
        <ListItem>
          <Avatar>
            {titleInitials({title:title, lettersQuantity: 2})}
          </Avatar>
          <ListItemText primary={title}/>
        </ListItem>
    );
  }
}

export default ChatItem;



