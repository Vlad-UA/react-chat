import React from 'react';
import {Redirect} from 'react-router-dom';

import WelcomeHeader from './WelcomeHeader';
import WelcomeBody from "./WelcomeBody";

class WelcomePageView extends React.Component {
  render() {
    const {signup, login, isAuthenticated} = this.props;

    if (isAuthenticated){
      return (<Redirect to="/chat"/>);
    }

    return (
      <React.Fragment>
        <WelcomeHeader/>
        <WelcomeBody onSignup={signup} onLogin={login}/>
      </React.Fragment>
    )
  }
}

export default WelcomePageView;
