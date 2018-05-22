import React from 'react';

import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
    width: '100%',
    marginTop: 12
  },
});

const MessageTypeNew = ({classes, classAdditional}) => {
  return (
    <Paper className={classAdditional} elevation={4}>
      <Input
        placeholder="Type your message..."
        className={classes.input}
      />
    </Paper>
  );
};

export default withStyles(styles)(MessageTypeNew);
