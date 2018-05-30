import React from 'react';
import classNames from "classnames";
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    margin: 20
  },
  input: {
    margin: theme.spacing.unit,
    width: '94%',
    marginTop: 12,
    left: 20,
  },
  joinButton:{
    marginLeft: 15,
    width: '95%'
  }
});

class MessageTypeNew extends React.Component {
  state = {
    value: '',
  };

  handleKeyPress = (event) => {
    const {value} = this.state;

    if (event.key === 'Enter' && value) {
      this.props.sendMessage(value);
      this.setState({value: ''});
    }
  };

  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const {classes, classAdditional, showJoinButton, onJoinButtonClick} = this.props;

    return (
      <Paper className={classNames(classAdditional, classes.root)} elevation={4}>
        {showJoinButton
          ?
          <Button
            fullWidth
            variant="raised"
            color="primary"
            onClick={onJoinButtonClick}
            className={classes.joinButton}
          >
            Join
          </Button>
          :
          <Input
            placeholder="Type your message..."
            className={classes.input}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleValueChange}
            value={this.state.value}
          />
        }
      </Paper>
    );
  }
}

export default withStyles(styles)(MessageTypeNew);