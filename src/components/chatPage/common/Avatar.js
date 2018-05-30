import React from 'react';

import titleInitials from "../../../utils/title-initials";
import MUIAvatar from 'material-ui/Avatar';

import getColorFrom from '../../../utils/getColorFrom';

const AvatarItem = ({title, lettersQuantity, colorFrom}) => {
  return <MUIAvatar style={{backgroundColor: getColorFrom(colorFrom)}}>
    {titleInitials({title, lettersQuantity})}
  </MUIAvatar>;
};

export default AvatarItem;
