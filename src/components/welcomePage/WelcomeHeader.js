import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = () => ({
  userAccountButton: {
    position: 'absolute',
    right: 20,
    top: 6,
  },
});

const WelcomeHeader = ({ classAdditional }) => (
  <AppBar className={classAdditional}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        DogeCodes React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);
WelcomeHeader.propTypes = {
  classAdditional: PropTypes.string,
};
WelcomeHeader.defaultProps = {
  classAdditional: '',
};

export default withStyles(styles)(WelcomeHeader);
