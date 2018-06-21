/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatMenu from '../ChatMenu';

const mockProps = {
  signup: jest.fn(),
  login: jest.fn(),
  isAuthenticated: false,
  error: null,

  onLeaveClick: jest.fn(),
  onDeleteClick: jest.fn(),
  activeUser: {
    isMember: true,
    isCreator: true,
  },
  disabled: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatMenu {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
