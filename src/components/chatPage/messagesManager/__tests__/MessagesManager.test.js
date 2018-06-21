/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import MessagesManager from '../MessagesManager';

const mockProps = {
  sendMessage: jest.fn(),
  joinChat: jest.fn(),
  activeUser: {
    _id: '_id',
  },
  messagesList: [],
  isConnected: true,
  isActiveChatExists: true,
};

jest.mock('../MessageTypeNew', () => () => 'MessageTypeNew');
jest.mock('../MessagesList', () => () => 'MessagesList');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MessagesManager {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
