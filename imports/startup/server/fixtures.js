// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {
  GoogleApi._host = "https://people.googleapis.com";
});
