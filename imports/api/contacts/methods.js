// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './contacts.js';

Meteor.methods({
  'contact.import.phone'(contacts, userId) {

    Contacts.remove({userId: userId, platform: "phone"});
    contacts.forEach((contact)=>{

      const info = {
        firstName: contact.name.givenName,
        lastName: contact.name.familyName || contact.name.givenName,
        alternateName: contact.name.formatted,
        addresses:contact.addresses,
        emails:contact.emails,
        organizations:contact.organizations,
      };

      Contacts.insert({userId, platform: "phone", info, dateUpdated: new Date()});
    });

  },
  'contact.update.key'(_id){
    const {userId} = this;
    Contacts.update({_id},{})
  }
});
