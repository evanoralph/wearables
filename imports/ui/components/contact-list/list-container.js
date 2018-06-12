import {compose, merge} from 'react-komposer';
import Component from './list';
import getTrackerLoader from '../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';
import { Contacts }  from '../../../api/contacts/contacts';

function composer (props, onData ) {
  let { platform } = props.match.params;

  const ContactSubs = Meteor.subscribe('contacts.list', platform);

  if(ContactSubs.ready()){
    const contacts = Contacts.find().fetch();
    console.log(contacts);
    onData(null, {contacts, platform});
  }

}

const depsToPropsMapper = (context, actions) => ({
  context:context,
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(Component);
