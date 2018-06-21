/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import ChatPageView from '../ChatPageView';

const mockProps = {
  fetchAllChats: jest.fn(),
  fetchMyChats: jest.fn(),
  setActiveChat: jest.fn(),
  socketConnect: jest.fn(),
  mountChat: jest.fn(),
  unmountChat: jest.fn(),
  onLogoutAction: jest.fn(),
  createChat: jest.fn(),
  joinChat: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  sendMessage: jest.fn(),
  editUserProfile: jest.fn(),
  chats: {
    active: {},
    my: [],
    all: [],
  },
  activeUser: {
    username: 'username',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  messagesList: [
    {
      _id: '123foo321',
      chatId: '12345',
      content: 'Hello, World!',
      sender: {
        _id: '12345',
        username: 'me',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
    {
      _id: '321bar123',
      chatId: '12345',
      content: 'Hello, React!',
      sender: {
        _id: '54321',
        username: 'someone',
      },
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  isConnected: true,
  error: null,
};

jest.mock('../chatsManager/ChatsManager', () => () => 'ChatsManager');
jest.mock('../messagesManager/MessagesManager', () => () => 'MessagesManager');
jest.mock('../chatHeader/ChatHeader', () => () => 'ChatHeader');
jest.mock('../../common/ErrorMessage', () => () => 'ErrorMessage');

describe('<ChatPageView />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/chat/123']}>
        <Route path="/chat/:chatId?" render={props => <ChatPageView {...mockProps} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
