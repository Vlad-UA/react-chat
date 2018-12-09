import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const styles = theme => ({
  paper: {
    marginTop: (theme.spacing.unit * 3) + 64,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomeBody extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    onSignup: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  state = { activeTab: 0 };

  getTabContent = (activeTab, onSignup, onLogin) => (
    activeTab ? <SignUpForm onSubmit={onSignup} /> : <LoginForm onSubmit={onLogin} />);

  handleTabChange = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { classes, onLogin, onSignup } = this.props;
    const { activeTab } = this.state;
    return (
      <Grid container justify="center">
        <Grid item>
          <Paper className={classes.paper}>
            <AppBar position="static" color="default">
              <Tabs value={activeTab} onChange={this.handleTabChange} fullWidth>
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            <div className={classes.tabContent}>
              {this.getTabContent(activeTab, onSignup, onLogin)}
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}


export default withStyles(styles)(WelcomeBody);
