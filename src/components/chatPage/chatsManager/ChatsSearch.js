import React from 'react';

import Input from 'material-ui/Input';

const ChatsSearch = ({classAdditional}) => {
  return (
    <Input placeholder="Search chats..." className={classAdditional}/>
  );
};

export default ChatsSearch;
