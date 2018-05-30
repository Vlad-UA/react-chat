import React from 'react';

import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';

import MessageItem from "./MessageItem";
import classNames from "classnames";

const styles = () => ({
  root: {
    overflowY: 'scroll',
  },
  thereNoMessage:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
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
    const {classes, classAdditional, messagesList, activeUser} = this.props;

    return (
      <main ref={this.refMessagesWrapper} className={classNames(classes.root, classAdditional)}>
        {
          messagesList && messagesList.length > 0
            ? <List>
              {messagesList && messagesList.map((message, index) => <MessageItem {...message} key={index} activeUser={activeUser}/>)}
            </List>
            : <div className={classes.thereNoMessage} >
              <Typography variant="display1">There is no messages yet...</Typography>
            </div>
        }
      </main>
    );
  }
}

export default withStyles(styles)(MessagesList);

