/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatCreateNew from '../ChatCreateNew';

const mockProps = {
  createChatAction: jest.fn(),
  disabled: false,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatCreateNew {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
