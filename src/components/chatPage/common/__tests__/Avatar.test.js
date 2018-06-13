/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Avatar from '../Avatar';

const mockProps = {
  title: 'title name',
  lettersQuantity: 2,
  colorFrom: 'colorFrom',
};

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('snapshot renders correctly', () => {
    const tree = renderer.create(<Avatar {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
