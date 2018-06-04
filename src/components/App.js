import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import ChatPage from '../containers/ChatPageContainer';
import WelcomePageView from '../containers/WelcomePageContainer';
import PrivateRoute from '../containers/PrivateRoute';
import history from '../utils/history';



const App = () => (

    <Router history={history}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePageView}/>
        <PrivateRoute path="/chat/:chatId?" component={ChatPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>

);

export default App;
