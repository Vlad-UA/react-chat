import React from 'react';

import Input from 'material-ui/Input';

function ChatsSearch(props) {
  const {classAdditional} = props;
  return (
    <Input placeholder="Search chats..." className={classAdditional}/>
  );
}

export default ChatsSearch;
