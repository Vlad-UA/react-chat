import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import ChatsList from './ChatsList';
import ChatCreateNew from './ChatCreateNew';
import ChatSearch from './ChatsSearch';
import ChatFilter from './ChatsFilter';

const styles = () => ({
  chatSearch: {
    marginTop: 12,
    margin: 20,
  },

  chatsList: {
    position: 'absolute',
    top: 60,
    bottom: 100,
    left: 0,
    overflow: 'auto',
    width: '100%',
    height: 'calc(100% - 130px)',
  },

  chatFilter: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    left: 0,
    width: '100%',
  },

  chatCreateNewButton: {
    left: 234,
    bottom: 90,
    position: 'absolute',
  },
});

class ChatsManager extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    classAdditional: PropTypes.string,
    chats: PropTypes.shape({
      my: PropTypes.array,
      all: PropTypes.array,
    }).isRequired,
    createChatAction: PropTypes.func.isRequired,
    isConnected: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    classAdditional: '',
  };
  state = {
    searchValue: '',
    activeTab: 0,
  };

  handleTabFilterChange = (event, value) => {
    this.setState({
      activeTab: value,
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  applySearchFilterAndSorting = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase()))
      .sort((one, two) => (one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));
  };

  render() {
    const {
      classes, chats, classAdditional, createChatAction, isConnected,
    } = this.props;
    const { activeTab } = this.state;

    return (
      <Drawer variant="permanent" classes={{ paper: classAdditional }}>
        <ChatSearch classAdditional={classes.chatSearch} onChange={this.handleSearchChange} />

        <ChatsList
          disabled={!isConnected}
          classAdditional={classes.chatsList}
          chats={this.applySearchFilterAndSorting(activeTab === 0 ? chats.my : chats.all)}
        />

        <ChatFilter classAdditional={classes.chatFilter} onChange={this.handleTabFilterChange} />

        <ChatCreateNew
          disabled={!isConnected}
          classAdditional={classes.chatCreateNewButton}
          createChatAction={createChatAction}
        />
      </Drawer>
    );
  }
}

export default withStyles(styles)(ChatsManager);
