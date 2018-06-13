/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from '../ErrorMessage';

const mockProps = {
  error: new Error('Error message!'),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMessage error={mockProps.error} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
