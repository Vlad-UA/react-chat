import React from 'react';

import Input from 'material-ui/Input';

const ChatsSearch = props => {
  const {classAdditional} = props;
  return (
    <Input placeholder="Search chats..." className={classAdditional}/>
  );
};

export default ChatsSearch;
