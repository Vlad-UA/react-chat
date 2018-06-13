/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import UserAccountButton from '../UserAccountButton';

const mockProps = {
  editUserProfile: jest.fn(),
  onLogoutAction: jest.fn(),
  disabled: false,
  activeUser: {
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserAccountButton {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
