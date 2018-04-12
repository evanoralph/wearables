import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.add'(data) {

    if (Meteor.users.find({'$or': [{'username': data.email}, {'emails.0.address': data.email}]}).count() > 0) {
      return "user already Exist";
    }

    const profile = {
      
    };

    let userId = Accounts.createUser({
      email: data.email, password: data.password, profile: {}
    });

    return {userId}
  },
  'delete.users'(_id){
    Meteor.users.remove({_id})
  }
});
