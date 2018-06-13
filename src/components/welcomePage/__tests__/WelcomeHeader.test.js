/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeHeader from '../WelcomeHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
