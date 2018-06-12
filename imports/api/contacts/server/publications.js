import { Meteor } from 'meteor/meteor';
import { Contacts } from '../contacts.js';

Meteor.publish('contacts.list', function (platform) {
  const {userId} = this;
  return Contacts.find({userId, platform});
});
