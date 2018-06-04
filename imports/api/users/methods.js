import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Linkedin from 'node-linkedin';
import Twitter from 'twitter';

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

  },
  'twitter.fetch'(accessToken, accessTokenSecret, userId){
    if (Meteor.isServer) {
      return new Promise((resolve, reject) => {
        const twitter = new Twitter({
          consumer_key: Meteor.settings.twitter.consumerKey,
          consumer_secret: Meteor.settings.twitter.secret,
          access_token_key: accessToken,
          access_token_secret: accessTokenSecret
        });

        let params = {user_id: userId, count: 200, skip_status: true, include_user_entities: false};
        twitter.get('friends/list', params, (err, list, res) => {
          if (!!err) {
            reject(err);
          }
          else {
            resolve({err, list, res});
          }
        });


      })
    }
  }
});