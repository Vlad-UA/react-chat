import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import configureStore from '../store';

import ChatPage from '../containers/ChatPageContainer';
import WelcomePageView from '../containers/WelcomePageContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePageView}/>
        <Route path="/chat" component={ChatPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  </Provider>
);

export default App;
