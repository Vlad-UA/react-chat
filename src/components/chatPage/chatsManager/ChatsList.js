import React from 'react';

import List from 'material-ui/List';

import ChatItem from './ChatItem';

const ChatsList = ({classAdditional, chatsList}) => {
  return (
    <List className={classAdditional}>
      {chatsList && chatsList.map((chat, index) => <ChatItem key={index} {...chat}/>)}
    </List>
  );
}

export default ChatsList;
