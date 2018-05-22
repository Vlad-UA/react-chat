import React from 'react';

import {ListItem, ListItemText} from 'material-ui/List';

import AvatarItem from "../common/Avatar";

const ChatItem = ({title}) => {
  return (
    <ListItem button>
      <AvatarItem title={title} lettersQuantity={2} colorFrom={title}/>
      <ListItemText primary={title}/>
    </ListItem>
  );
}

export default ChatItem;
