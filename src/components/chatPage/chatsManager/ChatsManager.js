import React from 'react';

import {withStyles} from 'material-ui/styles';
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
  },

  chatFilter: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    left: 0,
    width: '100%',
  },

  chatCreateNewButton: {
    left: 234,
    bottom: 90,
    position: 'absolute',
  },
});

const ChatsManager = ({classes, chatsList, classAdditional}) => {
    return (
      <Drawer variant="permanent" classes={{paper: classAdditional}}>
        <ChatSearch classAdditional={classes.chatSearch}/>

        <ChatsList classAdditional={classes.chatsList} chatsList={chatsList}/>

        <ChatFilter classAdditional={classes.chatFilter}/>

        <ChatCreateNew classAdditional={classes.chatCreateNewButton}/>
      </Drawer>
    );
};

export default withStyles(styles)(ChatsManager);
