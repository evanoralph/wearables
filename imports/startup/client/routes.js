import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import App from '../../ui/layouts/app.js';
import Index from '../../ui/pages/index';

// const authenticate = (nextState, replace) => {
//   if (!Meteor.loggingIn() && !Meteor.userId()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname },
//     });
//   }
// };


// Meteor.startup(() => {
//   <Router history={ browserHistory }>
//     <Route path="/" component={ App }>
//       <IndexRoute name="index" component={ Index } />
//     </Route>
//   </Router>,
//     document.getElementById('react-root')
// });