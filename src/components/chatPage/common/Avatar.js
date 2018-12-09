import React from 'react';
import MUIAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import titleInitials from '../../../utils/title-initials';
import getColorFrom from '../../../utils/getColorFrom';

const Avatar = ({ title, lettersQuantity, colorFrom }) => (
  <MUIAvatar style={{ backgroundColor: getColorFrom(colorFrom) }}>
    {titleInitials({ title, lettersQuantity })}
  </MUIAvatar>
);

Avatar.propTypes = {
  title: PropTypes.string.isRequired,
  lettersQuantity: PropTypes.number.isRequired,
  colorFrom: PropTypes.string.isRequired,
};

export default Avatar;
