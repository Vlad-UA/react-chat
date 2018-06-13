/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../LoginForm';

const mockProps = {
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
