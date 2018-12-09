import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const ChatsSearch = ({ classAdditional, onChange }) => (
  <Input placeholder="Search chats..." className={classAdditional} onChange={onChange} />
);

ChatsSearch.propTypes = {
  classAdditional: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
ChatsSearch.defaultProps = {
  classAdditional: '',
};

export default ChatsSearch;
