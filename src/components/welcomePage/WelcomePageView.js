import React from 'react';
import {Redirect} from 'react-router-dom';

import WelcomeHeader from './WelcomeHeader';
import WelcomeBody from "./WelcomeBody";
import ErrorMessage from "../common/errorMessage";

class WelcomePageView extends React.Component {
  render() {
    const {signup, login, isAuthenticated, error} = this.props;

    if (isAuthenticated){
      return (<Redirect to="/chat"/>);
    }

    return (
      <React.Fragment>
        <WelcomeHeader/>
        <WelcomeBody onSignup={signup} onLogin={login}/>
        <ErrorMessage error={error}/>
      </React.Fragment>
    )
  }
}

export default WelcomePageView;
