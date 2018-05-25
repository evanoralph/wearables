import {compose, merge} from 'react-komposer';
import Component from './imports-buttons';
import getTrackerLoader from '../../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';

function composer (props, onData ) {

  let userSub = Meteor.subscribe('users.find', Meteor.userId());

  if (userSub.ready()) {
    // Need to get "services" field so we have to sub and get the whole data here
    let user = Meteor.users.findOne({
      _id: Meteor.userId()
    }, {
      fields: {
        email: true,
        profile: true,
        roles: true,
        services: true
      }
    });
    onData(null, {user});
  }
}

const depsToPropsMapper = (context, actions) => ({
  context:context,
  loginWithLinkedin: actions.importButton.loginWithLinkedin,
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(Component);
