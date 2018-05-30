import {compose, merge} from 'react-komposer';
import Component from './list';
import getTrackerLoader from '../../../lib/getTrackerLoader';
import { useDeps } from 'react-simple-di-extra';
import { Contacts }  from '../../../api/contacts/contacts';

function composer (props, onData ) {
  console.log(props);

  const ContactSubs = Meteor.subscribe('contacts.list','phone');

  if(ContactSubs.ready()){
    const contacts = Contacts.find().fetch();
    console.log(contacts);
    onData(null, {contacts});
  }

}

const depsToPropsMapper = (context, actions) => ({
  context:context,
});

export default merge(
  compose(getTrackerLoader(composer)),
  useDeps(depsToPropsMapper),
)(Component);
