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
import {useDeps} from 'react-simple-di-extra';

import RoutesAuthenticated from './routes-wrapper/routes-authenticated';
import RoutePublic from './routes-wrapper/routes-public';

import Index from '../pages/index';
import Login from '../pages/login/login';
import Main from '../pages/main-page/main';
import SignUp from '../pages/sign-up/sign-up-page'
import SignUpSelection from '../pages/sign-up/sign-up-selection-page'
import LoginSelection from '../pages/login/login-selection-page'
import {syncHistoryWithStore} from 'react-router-redux'
import Sidebar from 'react-sidebar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

  }

  onSetSidebarOpen = function (open, url) {
    if (!!url) {
      // TODO: REDIRECT HERE
      //
      setTimeout(() => {
        this.setState({sidebarOpen: open});
      }, 100)
    } else {
      this.setState({sidebarOpen: open});
    }
  }

  render() {

    var SideMenu =
      <div id="sideNav">
        <div className="side-header">
          <span className="sidebar-title">SETTINGS</span>
        </div>
        <div className="side-menu">
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            CONTACT SETTINGS
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            MY PROFILE
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            SUPPORT
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            TERMS OF SERVICE
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            PRIVACY POLICY
          </div>
        </div>
        <div className="side-footer">
          <button>LOG OUT</button>
        </div>
      </div>;

    let SideMenuStyles = {
      root: {
        //display: classNames({"none": !this.state.showHeader}),
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1001,
        height: 'calc(100vh - 20px) !important',
      },
      sidebar: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        transition: 'transform .2s ease-in-out',
        WebkitTransition: '-webkit-transform .2s ease-in-out',
        willChange: 'transform',
        overflowY: 'auto',
        backgroundColor: '#F6F4F0',
        height: 'calc(100vh - 20px)',
        padding: '0px',
        pointerEvents: 'auto',
        overflow: 'hidden',
        width: '90vw',
        boxShadow: 'rgba(0, 0, 0, 0.25) 10px 0px 20px !important',
      },
      content: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        transition: 'left .2s ease-in-out, right .2s ease-in-out',
        pointerEvents: 'none',
        height: 'calc(100vh - 20px)',
      },
      overlay: {
        zIndex: 0,
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .2s ease-in-out, visibility .2s ease-in-out',
        backgroundColor: 'rgba(0,0,0,0)',
        height: 'calc(100vh - 20px)',
        pointerEvents: 'none',
        overflow: 'hidden',
      },
      dragHandle: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        bottom: 0,
        pointerEvents: 'auto',
      },
    };

    console.log("app props", this.props);

    return (
      <Provider store={store}>
        <Router>
          <div id="app-container">
            <Switch>
              <Route exact name="index" path="/" component={Index}/>
              <RoutePublic exact name="login" path="/login" component={Login} {...this.props}/>
              <RoutePublic exact name="login" path="/login-selection" component={LoginSelection} {...this.props}/>
              <RoutePublic exact name="sign up" path="/sign-up" component={SignUp} {...this.props}/>
              <RoutePublic exact name="sign up" path="/sign-up-selection" component={SignUpSelection} {...this.props}/>
              <RoutePublic exact name="main" path="/main" component={Main} onSetOpen={this.onSetSidebarOpen} open={this.state.sidebarOpen} {...this.props}/>
            </Switch>
            <Sidebar sidebar={SideMenu} styles={SideMenuStyles}
                     open={this.state.sidebarOpen}
                     onSetOpen={this.onSetSidebarOpen}>
              <div></div>
            </Sidebar>
          </div>
        </Router>
      </Provider>
    );
  }
};


function composer(props, onData) {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default merge(
  compose(getTrackerLoader(composer))
)(injectDeps(context, actions)(App));