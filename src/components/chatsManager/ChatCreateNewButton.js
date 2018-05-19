import React from 'react';

import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

const ChatCreateNewButton = props => {
  const {classAdditional} = props;

  return (
    <Button variant="fab" color="primary" aria-label="add" className={classAdditional}>
      <AddIcon/>
    </Button>
  );
}

export default ChatCreateNewButton;
