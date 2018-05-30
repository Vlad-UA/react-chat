import React from 'react';

import {withStyles} from 'material-ui/styles';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = () => ({
  signUpButton: {
    marginTop: 20
  }
});

class SignUpForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    passwordBase: {
      value: '',
      isValid: true,
    },
    passwordRepeat: {
      value: '',
      isValid: true,
    },
  };

  handleInput = (event) => {
    event.persist();

    const {name, value} = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      }
    }));
  };

  isPasswordValid = () => {
    const {passwordBase, passwordRepeat} = this.state;

    const isValid = passwordBase.value === passwordRepeat.value;

    this.setState({
      passwordRepeat: {
        ...passwordRepeat,
        isValid,
      }
    });

    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {username, passwordBase} = this.state;

    if (!this.isPasswordValid()) {
      return;
    }

    this.props.onSubmit(username.value, passwordBase.value);
  };

  render() {
    const {username, passwordBase, passwordRepeat} = this.state;
    const {classes} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          placeholder="Type your username..."
          type="text"
          name="username"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInput}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          placeholder="Type your password..."
          type="password"
          name="passwordBase"
          margin="normal"
          autoComplete="current-password"
          value={passwordBase.value}
          onChange={this.handleInput}
          error={!passwordBase.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat Password"
          placeholder="Repeat your password..."
          type="password"
          name="passwordRepeat"
          margin="normal"
          autoComplete="current-password"
          value={passwordRepeat.value}
          onChange={this.handleInput}
          error={!passwordRepeat.isValid}
        />
        <Button fullWidth variant="raised" type="submit" color="primary" className={classes.signUpButton}>
          Sign Up
        </Button>
      </form>
    );
  };
}

export default withStyles(styles)(SignUpForm);
