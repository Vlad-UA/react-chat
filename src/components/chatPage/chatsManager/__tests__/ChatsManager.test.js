/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatsManager from '../ChatsManager';

const mockProps = {
  createChatAction: jest.fn(),
  chats: {
    my: [],
    all: [],
  },
  isConnected: true,
};

jest.mock('../ChatsList', () => () => 'ChatsList');
jest.mock('../ChatCreateNew', () => () => 'ChatCreateNew');
jest.mock('../ChatsSearch', () => () => 'ChatsSearch');
jest.mock('../ChatsFilter', () => () => 'ChatsFilter');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatsManager {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
