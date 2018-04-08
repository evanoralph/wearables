import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {Provider} from 'react-redux';
import store from '../../startup/configs/store';
import {injectDeps} from 'react-simple-di-extra';
import context from '../../startup/configs/context';
import actions from '../../startup/configs/actions';

import {compose, merge} from 'react-komposer';
import getTrackerLoader from '../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

import RoutesAuthenticated from './routes-wrapper/routes-authenticated';
import RoutePublic from './routes-wrapper/routes-public';

import Index from '../pages/index';
import Login from '../pages/login/login';
import Main from '../pages/main-page/main';
import SignUp from '../pages/sign-up/sign-up-page'
import SignUpSelection from '../pages/sign-up/sign-up-selection-page'
import {syncHistoryWithStore} from 'react-router-redux'



const App = appProps => (
  <Provider store={store}>
    <Router>
      <div id="app-container">
        <Switch>
          <Route exact name="index" path="/" component={Index}/>
          <RoutePublic exact name="login" path="/login" component={Login} {...appProps}/>
          <RoutePublic exact name="sign up" path="/sign-up" component={SignUp} {...appProps}/>
          <RoutePublic exact name="sign up" path="/sign-up-selection" component={SignUpSelection} {...appProps}/>
          <RoutePublic exact name="main" path="/main" component={Main} {...appProps}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);


function composer (props, onData ) {
  const loggingIn = Meteor.loggingIn();
  console.log(props)
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default merge(
  compose(getTrackerLoader(composer))
)(injectDeps(context, actions)(App));