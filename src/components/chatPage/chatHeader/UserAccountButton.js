import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import IconAccount from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    color: '#FFFFFF',
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3,
  },
});

class UserAccountButton extends React.Component {
  static propTypes = {
    editUserProfile: PropTypes.func.isRequired,
    onLogoutAction: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    classAdditional: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    classAdditional: '',
  };
  // eslint-disable-next-line
  state = {
    isModalOpen: false,
    anchorEl: null,
    username: '',
    firstName: '',
    lastName: '',
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      username: props.activeUser.username,
      firstName: props.activeUser.firstName,
      lastName: props.activeUser.lastName,
    };
  }

  onCloseEditProfileModal = () => {
    this.setState({ isModalOpen: false });
  };

  onSaveEditProfileModal = () => {
    const { editUserProfile } = this.props;
    const { username, firstName, lastName } = this.state;

    editUserProfile({
      username,
      firstName,
      lastName,
    });

    this.setState({ isModalOpen: false });
  };

  handleMenuItemLogoutClick = () => {
    const { onLogoutAction } = this.props;

    onLogoutAction();
    this.handleMenuClose();
  };

  handleMenuItemEditProfileClick = () => {
    this.setState({ isModalOpen: true });
    this.handleMenuClose();
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleUserAccountButtonClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes, classAdditional, disabled } = this.props;
    const {
      anchorEl, isModalOpen, lastName, firstName, username,
    } = this.state;

    return (
      <React.Fragment>
        <IconButton
          className={classNames(classes.root, classAdditional)}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleUserAccountButtonClick}
          disabled={disabled}
        >
          <IconAccount />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuItemEditProfileClick}>Edit Profile</MenuItem>
          <MenuItem onClick={this.handleMenuItemLogoutClick}>Logout</MenuItem>
        </Menu>
        <Modal
          open={isModalOpen}
          className={classes.modalWrapper}
          onClose={this.onCloseEditProfileModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Edit profile
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              placeholder="Enter you username..."
              type="text"
              margin="normal"
              helperText="Some important text1"
              value={username}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="firstName"
              label="First name"
              placeholder="Enter you first name..."
              type="text"
              margin="normal"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              placeholder="Enter you last name..."
              type="text"
              margin="normal"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <Button color="primary" onClick={this.onSaveEditProfileModal}>
              Save
            </Button>
            <Button onClick={this.onCloseEditProfileModal}>Close</Button>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UserAccountButton);
