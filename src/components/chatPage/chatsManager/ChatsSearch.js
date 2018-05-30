import React from 'react';

import Input from 'material-ui/Input';

const ChatsSearch = ({classAdditional, onChange}) => {
  return (
    <Input placeholder="Search chats..." className={classAdditional} onChange={onChange} />
  );
};

export default ChatsSearch;
