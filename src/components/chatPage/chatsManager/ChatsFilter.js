import React from 'react';

import IconRestore from '@material-ui/icons/Restore';
import IconExplore from '@material-ui/icons/Explore';
import BottomNavigation, { BottomNavigationAction } from '@material-ui/core/BottomNavigation';
import PropTypes from 'prop-types';

const ChatsFilter = ({ classAdditional, onChange }) => (
  <BottomNavigation className={classAdditional} onChange={onChange} showLabels>
    <BottomNavigationAction label="My Chats" icon={<IconRestore />} />
    <BottomNavigationAction label="Explore" icon={<IconExplore />} />
  </BottomNavigation>
);

ChatsFilter.propTypes = {
  classAdditional: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
ChatsFilter.defaultProps = {
  classAdditional: '',
};

export default ChatsFilter;
