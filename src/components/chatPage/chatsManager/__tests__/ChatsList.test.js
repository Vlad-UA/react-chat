/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatsList from '../ChatsList';

jest.mock('../ChatItem', () => () => 'ChatItem');

const mockProps = {
  chats: [{
    _id: '5b07ff83b425b605442572c4',
    updatedAt: '2018-05-30T11:15:38.127Z',
    createdAt: '2018-05-25T12:20:19.920Z',
    creator: {
      _id: '5b032bc2b425b605442572c0',
      username: 'username',
      lastName: 'Baz',
      firstName: 'Denys',
    },
    title: 'React',
    members: [
      {
        _id: '5b097a59b425b605442572cc',
        username: '1',
        lastName: '1',
        firstName: '1',
      },
    ],
    __v: 0,
  },
  ],
  disabled: false,
};

describe('<ChatsList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatsList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot renders correctly - renders correctly with chats', () => {
    const tree = renderer.create(<ChatsList {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - renders without chats', () => {
    const tree = renderer.create(<ChatsList {...mockProps} chats={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
