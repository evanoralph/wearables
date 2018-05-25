import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Linkedin from 'node-linkedin';

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
  },
  'linkedin.fetch'(accessToken, callback){
    if (Meteor.isServer) {

      let linkedinConnection = Linkedin(Meteor.settings.linkedIn.clientId, Meteor.settings.linkedIn.secret);
      let linkedin = linkedinConnection.init(accessToken);
      console.log(linkedinConnection)
      console.log(linkedin)
      linkedin.connections.retrieve(function(err, connections) {
        // Here you go! Got your connections!
        console.log(err, connections)
      });

    }

  }
});