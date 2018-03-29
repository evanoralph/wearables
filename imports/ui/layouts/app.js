import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {Provider} from 'react-redux';
import store from '../../startup/configs/store';


import Index from '../pages/index';
import Login from '../pages/login';





const App = appProps => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact name="index" path="/" component={Index}/>
          <Route exact name="login" path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App