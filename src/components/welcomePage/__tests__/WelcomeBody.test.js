/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeBody from '../WelcomeBody';

const mockProps = {
  onSignup: jest.fn(),
  onLogin: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeBody {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
