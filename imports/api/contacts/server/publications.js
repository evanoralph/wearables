import { Meteor } from 'meteor/meteor';
import { Contacts } from '../contacts.js';

Meteor.publish('contacts.list', function (platform) {
  const {userId} = this;
  console.log(Contacts.find({userId,platform}).fetch(),"aw")
  return Contacts.find({userId,platform});
});
