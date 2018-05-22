import React from 'react';

import IconRestore from '@material-ui/icons/Restore';
import IconExplore from '@material-ui/icons/Explore';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';

const ChatsFilter = ({classAdditional}) => {
    return (
      <BottomNavigation className={classAdditional} showLabels>
        <BottomNavigationAction label="My Chats1" icon={<IconRestore/>}/>
        <BottomNavigationAction label="Explore" icon={<IconExplore/>}/>
      </BottomNavigation>
    );
};

export default ChatsFilter;
