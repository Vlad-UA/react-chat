/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageTypeNew from '../MessageTypeNew';

const mockProps = {
  sendMessage: jest.fn(),
  onJoinButtonClick: jest.fn(),
  showJoinButton: true,
  disabled: false,
};

describe('<MessageTypeNew />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageTypeNew {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot renders correctly - Join to chat button (enabled)', () => {
    const tree = renderer
      .create(<MessageTypeNew {...mockProps} showJoinButton disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - Join to chat button (disabled)', () => {
    const tree = renderer
      .create(<MessageTypeNew {...mockProps} showJoinButton disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - Input message field (enabled)', () => {
    const tree = renderer
      .create(<MessageTypeNew {...mockProps} showJoinButton={false} disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders correctly - Input message field (disabled)', () => {
    const tree = renderer
      .create(<MessageTypeNew {...mockProps} showJoinButton={false} disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
