import React from 'react';
import classNames from 'classnames';

import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import IconAccount from '@material-ui/icons/AccountCircle';

const styles = () => ({
  root:{
    color: '#FFFFFF',
  }
});

const UserAccountButton = props => {
  const {classAdditional, classes} = props;
  return (
    <IconButton className={classNames(classes.root, classAdditional)}>
      <IconAccount/>
    </IconButton>
  );
}

export default withStyles(styles)(UserAccountButton);
