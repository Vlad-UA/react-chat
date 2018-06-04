import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import {withStyles} from 'material-ui/styles';

const styles = () => ({
  root: {
    top: -4,
  },
});

class ChatMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleLeaveClick = () => {
    this.handleClose();
    this.props.onLeaveClick();
  };

  handleDeleteClick = () => {
    this.handleClose();
    this.props.onDeleteClick();
  };

  render() {
    const {classes, activeUser} = this.props;
    const {anchorEl} = this.state;

    if (!activeUser.isChatCreatorOrMember) {
      return null;
    }

    return (
      <React.Fragment>
        <IconButton
          className={classes.root}
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreIcon/>
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
