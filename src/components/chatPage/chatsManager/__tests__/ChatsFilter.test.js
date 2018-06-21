/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatsFilter from '../ChatsFilter';

const mockProps = {
  onChange: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatsFilter {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
