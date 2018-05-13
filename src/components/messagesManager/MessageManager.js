import React from 'react';

import {withStyles} from 'material-ui/styles';

import MessageList from './MessagesList';
import MessageTypeNew from './MessageTypeNew';

const styles = () => ({
  messageList: {
    overflowY: 'scroll',
    height: 'calc(100% - 133px)'
  },

  messageTypeNew: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 20,
  }
});

class MessageManager extends React.Component {
  render() {
    const {classAdditional, messagesList, classes} = this.props;

    return (
      <div className={classAdditional}>
        <MessageList messagesList={messagesList} classAdditional={classes.messageList}/>
        <MessageTypeNew classAdditional={classes.messageTypeNew}/>
      </div>
    );
  }
}

export default withStyles(styles) (MessageManager);
