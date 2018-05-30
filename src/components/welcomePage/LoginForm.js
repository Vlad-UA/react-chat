import React from 'react';

import {withStyles} from 'material-ui/styles';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = () => ({
  loginButton: {
    marginTop: 20
  }
});

class LoginForm extends React.Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    }
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

  handleSubmit = (event) => {
    event.preventDefault();

    const {username, password} = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const {username, password} = this.state;
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
          name="password"
          margin="normal"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInput}
          error={!password.isValid}
        />
        <Button fullWidth variant="raised" type="submit" color="primary" className={classes.loginButton}>
          Login
        </Button>
      </form>
    );
  };
}

export default withStyles(styles)(LoginForm);
