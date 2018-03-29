import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {Provider} from 'react-redux';
import store from '../../startup/configs/store';
import {injectDeps} from 'react-simple-di-extra';
import context from '../../startup/configs/context';
import actions from '../../startup/configs/actions';


import Index from '../pages/index';
import Login from '../pages/login';
import Main from '../pages/main-page/main';



const App = appProps => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact name="index" path="/" component={Index}/>
          <Route exact name="login" path="/login" component={Login}/>
          <Route exact name="main" path="/main" component={Main}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default injectDeps(context, actions)(App);