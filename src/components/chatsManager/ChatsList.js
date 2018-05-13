import React from 'react';

import List from 'material-ui/List';

import ChatItem from './ChatItem';

class ChatsList extends React.Component {
  render() {
    const {classAdditional, chatsList} = this.props;

    return (
      <List className={classAdditional}>
        {chatsList.map((chat, index) => <ChatItem key={index} title={chat.title}/>)}
      </List>
    );
  }
}

export default ChatsList;
