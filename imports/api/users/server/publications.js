// All users-related publications

import { Meteor } from 'meteor/meteor';

Meteor.publish('users.find', function (userId) {
  return Meteor.users.find({_id: userId});
});
