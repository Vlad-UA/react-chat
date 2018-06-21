/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageItem from '../MessageItem';

const mockProps = {
  sender: {
    _id: '_id',
  },
  content: 'content',
  activeUser: {
    _id: '_id',
  },
  statusMessage: false,
  createdAt: '2018-03-16T10:53:23.200Z',
};

jest.mock('../../common/Avatar', () => () => 'Avatar');

describe('<MessageItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageItem {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot renders correctly - base message (not status message)', () => {
    const tree = renderer.create(<MessageItem {...mockProps} statusMessage={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - status message', () => {
    const tree = renderer.create(<MessageItem {...mockProps} statusMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
