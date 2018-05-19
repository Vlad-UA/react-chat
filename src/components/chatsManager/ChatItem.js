import React from 'react';

import {ListItem, ListItemText} from 'material-ui/List';

import AvatarItem from "../AvatarItem";

const ChatItem = props => {
  const {title} = props;

  return (
    <ListItem button>
      <AvatarItem title={title} lettersQuantity={2}/>
      <ListItemText primary={title}/>
    </ListItem>
  );
}

export default ChatItem;
