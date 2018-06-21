/* eslint-env jest */

import authenticationReducer from '../authenticationReducer';

describe('<authenticationReducer />', () => {
  it('should return the initial state', () => {
    expect(authenticationReducer(undefined, {})).toEqual({
      isAuthenticated: expect.any(Boolean),
      token: null,
      user: null,
    });
  });
});
