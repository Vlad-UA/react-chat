/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatHeader from '../ChatHeader';

jest.mock('../../common/Avatar', () => () => 'Avatar');

const mockProps = {
  activeUser: {
    isMember: true,
    isCreator: true,
  },
  onLogoutAction: jest.fn(),
  editUserProfile: jest.fn(),
  activeChat: {},
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  isConnected: true,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatHeader {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
