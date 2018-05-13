import React from 'react';

import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

class ChatCreateNewButton extends React.Component {
  render() {
    const {classAdditional} = this.props;

    return (
      <Button variant="fab" color="primary" aria-label="add" className={classAdditional}>
        <AddIcon />
      </Button>
    );
  }
}

export default ChatCreateNewButton;
