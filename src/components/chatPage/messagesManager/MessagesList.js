import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import MessageItem from './MessageItem';
import { getMessageId } from '../../../reducers/messagesReducer';

const styles = () => ({
  root: {
    overflowY: 'scroll',
  },
  thereNoMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
});

class MessagesList extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    classAdditional: PropTypes.string,
    activeUser: PropTypes.shape({
      _id: PropTypes.string,
    }).isRequired,
    messagesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  static defaultProps = {
    classAdditional: '',
  };
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  refMessagesWrapper = React.createRef();

  scrollDownHistory() {
    const messagesWrapper = this.refMessagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const {
      classes, classAdditional, messagesList, activeUser,
    } = this.props;

    return (
      <main ref={this.refMessagesWrapper} className={classNames(classes.root, classAdditional)}>
        {messagesList && messagesList.length > 0 ? (
          <List>
            {messagesList &&
              messagesList.map(message => (
                <MessageItem {...message} key={getMessageId(message)} activeUser={activeUser} />
              ))}
          </List>
        ) : (
          <div className={classes.thereNoMessage}>
            <Typography variant="display1">There is no messages yet...</Typography>
          </div>
        )}
      </main>
    );
  }
}

export default withStyles(styles)(MessagesList);
