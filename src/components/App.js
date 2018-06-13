import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import ChatPageContainer from '../containers/ChatPageContainer';
import WelcomePageContainer from '../containers/WelcomePageContainer';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import history from '../utils/history';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePageContainer} />
      <PrivateRouteContainer path="/chat/:chatId?" component={ChatPageContainer} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
