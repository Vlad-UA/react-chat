/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePageView from '../WelcomePageView';

const mockProps = {
  signup: jest.fn(),
  login: jest.fn(),
  error: null,
  isAuthenticated: false,
};

jest.mock('../WelcomeHeader', () => () => 'WelcomeHeader');
jest.mock('../WelcomeBody', () => () => 'WelcomeBody');
jest.mock('../../common/ErrorMessage', () => () => 'ErrorMessage');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomePageView {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
