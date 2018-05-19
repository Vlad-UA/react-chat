import React from 'react';

import titleInitials from "../utils/title-initials";
import Avatar from 'material-ui/Avatar';

const AvatarItem = props => {
  const {title, lettersQuantity} = props;

  return <Avatar>{titleInitials({title, lettersQuantity})}</Avatar>;
};

export default AvatarItem;
