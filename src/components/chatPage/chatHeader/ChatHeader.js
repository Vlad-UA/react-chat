import React from 'react';

import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import UserAccountButton from './UserAccountButton';

const styles = () => ({
  userAccountButton: {
    position: 'absolute',
    right: 20,
    top: 6,
  },
});

const ChatHeader = ({classes, classAdditional}) => {
  return (
    <AppBar className={classAdditional}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          DogeCodes React Chat
        </Typography>
        <UserAccountButton classAdditional={classes.userAccountButton}/>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles) (ChatHeader);
