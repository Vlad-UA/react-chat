import React from 'react';

import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';

import MessageItem from "./MessageItem";
import classNames from "classnames";

const styles = () => ({
  root: {
    overflowY: 'scroll',
  },
});

class MessagesList extends React.Component {
  refMessagesWrapper = React.createRef();

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refMessagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const {classes, classAdditional, messagesList} = this.props;

    return (
      <main ref={this.refMessagesWrapper} className={classNames(classes.root, classAdditional)}>
        <List>
          {messagesList && messagesList.map((message, index) => <MessageItem {...message} key={index}/>)}
        </List>
      </main>
    );
  }
}

export default withStyles(styles)(MessagesList);
