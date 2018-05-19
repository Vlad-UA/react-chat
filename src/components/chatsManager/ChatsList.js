import React from 'react';

import List from 'material-ui/List';

import ChatItem from './ChatItem';

const ChatsList = props => {
  const {classAdditional, chatsList} = props;

  return (
    <List className={classAdditional}>
      {chatsList.map((chat, index) => <ChatItem key={index} {...chat}/>)}
    </List>
  );
}

export default ChatsList;
