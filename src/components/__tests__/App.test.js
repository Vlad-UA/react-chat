/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

jest.mock('../../containers/PrivateRouteContainer', () => () => 'PrivateRouteContainer');
jest.mock('../../containers/WelcomePageContainer', () => () => 'WelcomePageContainer');
jest.mock('../../containers/ChatPageContainer', () => () => 'ChatPageContainer');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
