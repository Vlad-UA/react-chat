import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu, { MenuItem } from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    top: -4,
  },
});

class ChatMenu extends React.Component {
  static propTypes = {
    onLeaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool,
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
  };

  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLeaveClick = () => {
    const { onLeaveClick } = this.props;
    this.handleClose();
    onLeaveClick();
  };

  handleDeleteClick = () => {
    const { onDeleteClick } = this.props;
    this.handleClose();
    onDeleteClick();
  };

  render() {
    const { classes, activeUser, disabled } = this.props;
    const { anchorEl } = this.state;

    if (!activeUser.isChatCreatorOrMember) {
      return null;
    }

    return (
      <React.Fragment>
        <IconButton
          disabled={disabled}
          className={classes.root}
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {activeUser.isMember && <MenuItem onClick={this.handleLeaveClick}>Leave</MenuItem>}
          {activeUser.isCreator && <MenuItem onClick={this.handleDeleteClick}>Delete</MenuItem>}
        </Menu>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ChatMenu);
