// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from './contacts.js';

Meteor.methods({
  'contact.import.phone'(contacts) {
    const userId = this.userId;

    Contacts.remove({});
    contacts.forEach((contact)=>{


      //   lastName: "Armstrong",
      //   firstName: "Craig",
      //   company: "Cedar Sinai",
      //   job: "Doctor",
      //   location: "North Wing",
      //   alternateName: "Dr. K. Hollister",

      const info = {
        firstName: contact.name.givenName,
        lastName: contact.name.familyName,
        alternateName: contact.name.formatted,
        addresses:contact.addresses,
        emails:contact.emails,
        organizations:contact.organizations,
      };
      

      console.log(contact,"xx");
      Contacts.insert({userId,platform:"phone",info,dateUpdated:new Date()});
    });

  },
});
