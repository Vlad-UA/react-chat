/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageItem from '../MessagesList';

const mockProps = {
  sender: {},
  content: 'content',
  activeUser: {
    _id: '12345',
    username: 'me',
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
};

jest.mock('../MessageItem', () => () => 'MessageItem');

describe('<MessagesList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageItem {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot renders correctly - renders messages', () => {
    const tree = renderer
      .create(<MessageItem {...mockProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - renders without messages', () => {
    const tree = renderer
      .create(<MessageItem {...mockProps} messagesList={[]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
