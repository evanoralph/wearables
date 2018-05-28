// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './contacts.js';

Meteor.methods({
  'contact.import.phone'(contacts) {
    const userId = this.userId;

    Contacts.remove({});
    contacts.forEach((contact)=>{
      const info = {
        name: contact.name.givenName,
        alternateName: contact.name.formatted,
      }

      console.log(info,"xx");
      Contacts.insert({userId,platform:"phone",info,dateUpdated:new Date()});
    });

  },
});
