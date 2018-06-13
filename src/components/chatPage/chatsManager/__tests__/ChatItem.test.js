/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ChatItem from '../ChatItem';

jest.mock('../../common/Avatar', () => () => 'Avatar');

const mockProps = {
  title: 'title',
  chatId: 'chatId',
  isActive: false,
  createdAt: '2018-05-25T12:20:19.920Z',
  disabled: false,
};

describe('<ChatItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ChatItem {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot renders correctly - renders correctly', () => {
    const tree =
      renderer.create(<MemoryRouter><ChatItem {...mockProps} /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - renders disabled', () => {
    const tree =
      renderer
        .create(<MemoryRouter><ChatItem {...mockProps} disabled /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - renders active', () => {
    const tree =
      renderer
        .create(<MemoryRouter><ChatItem {...mockProps} active /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
