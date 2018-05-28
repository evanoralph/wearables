import { Meteor } from 'meteor/meteor';
import { Contacts } from '../contacts.js';

Meteor.publish('contacts.list', function (platform) {
  const _id = this.userId;
  return Contacts.find({_id,platform});
});
