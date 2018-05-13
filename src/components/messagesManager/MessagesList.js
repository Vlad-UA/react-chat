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

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const {classes, classAdditional, messagesList} = this.props;

    return (
      <main ref="messagesWrapper" className={classNames(classes.root, classAdditional)}>
        <List>
          {messagesList.map((message, index) => <MessageItem message={message} key={index}/>)}
        </List>
      </main>
    );
  }
}

export default withStyles(styles)(MessagesList);
