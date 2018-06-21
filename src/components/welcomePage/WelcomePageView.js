import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import WelcomeHeader from './WelcomeHeader';
import WelcomeBody from './WelcomeBody';
import ErrorMessage from '../common/ErrorMessage';

const WelcomePageView = ({
  signup, login, isAuthenticated, error,
}) => {
  if (isAuthenticated) {
    return <Redirect to="/chat" />;
  }
  return (
    <React.Fragment>
      <WelcomeHeader />
      <WelcomeBody onSignup={signup} onLogin={login} />
      <ErrorMessage error={error} />
    </React.Fragment>
  );
};

WelcomePageView.propTypes = {
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};

WelcomePageView.defaultProps = {
  error: null,
};

export default WelcomePageView;
