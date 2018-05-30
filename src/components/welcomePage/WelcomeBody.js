import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import withStyles from "material-ui/styles/withStyles";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3 + 64,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomeBody extends React.Component {
  state = {activeTab: 0};

  handleTabChange = (event, value) => {
    this.setState({activeTab: value});
  };

  getTabContent = (activeTab, onSignup, onLogin) => (
    activeTab ? <SignUpForm onSubmit={onSignup}/> : <LoginForm onSubmit={onLogin}/>
  );

  render() {
    const {classes, onSignup, onLogin} = this.props;
    const {activeTab} = this.state;

    return (
      <Grid container justify="center">
        <Grid item>
          <Paper className={classes.paper}>
            <AppBar position="static" color="default">
              <Tabs value={activeTab} onChange={this.handleTabChange} fullWidth>
                <Tab label="Login"/>
                <Tab label="Sign Up"/>
              </Tabs>
            </AppBar>
            <div className={classes.tabContent}>
              {this.getTabContent(activeTab, onSignup, onLogin)}
            </div>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(WelcomeBody);
