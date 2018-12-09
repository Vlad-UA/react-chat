import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

class ErrorMessage extends React.Component {
  static propTypes = {
    error: PropTypes.instanceOf(Error),
  };

  static defaultProps = {
    error: null,
  };

  state = {
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ open: true });
    }
  }

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { error } = this.props;
    const { open } = this.state;

    if (!error) {
      return null;
    }

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleCloseSnackbar}
        message={<span>{error.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleCloseSnackbar}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

export default ErrorMessage;
