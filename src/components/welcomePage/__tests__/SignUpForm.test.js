/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from '../SignUpForm';

const mockProps = {
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpForm {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
