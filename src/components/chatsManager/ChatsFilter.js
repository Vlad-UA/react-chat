import React from 'react';

import IconRestore from '@material-ui/icons/Restore';
import IconExplore from '@material-ui/icons/Explore';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';

class ChatsFilter extends React.Component {
  render() {
    const {classAdditional} = this.props;

    return (
      <BottomNavigation className={classAdditional} showLabels>
        <BottomNavigationAction label="My Chats1" icon={<IconRestore/>}/>
        <BottomNavigationAction label="Explore" icon={<IconExplore/>}/>
      </BottomNavigation>
    );
  }
}

export default ChatsFilter;
