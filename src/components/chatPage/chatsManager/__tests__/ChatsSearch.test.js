/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatsSearch from '../ChatsSearch';

const mockProps = {
  onChange: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatsSearch {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
