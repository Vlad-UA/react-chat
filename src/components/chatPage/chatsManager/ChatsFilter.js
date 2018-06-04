import React from 'react';

import IconRestore from '@material-ui/icons/Restore';
import IconExplore from '@material-ui/icons/Explore';
import BottomNavigation, {BottomNavigationAction} from 'material-ui/BottomNavigation';

const ChatsFilter = ({classAdditional, onChange}) => {
    return (
      <BottomNavigation className={classAdditional} onChange={onChange} showLabels>
        <BottomNavigationAction label="My Chats" icon={<IconRestore/>}/>
        <BottomNavigationAction label="Explore" icon={<IconExplore/>}/>
      </BottomNavigation>
    );
};

export default ChatsFilter;
