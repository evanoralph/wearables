import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Linkedin from 'node-linkedin';
import Twitter from 'twitter';
import {Contacts} from '../contacts/contacts.js';
import Fibers from 'fibers';

Meteor.methods({
  'users.add'(data) {

    if (Meteor.users.find({'$or': [{'username': data.email}, {'emails.0.address': data.email}]}).count() > 0) {
      return "user already Exist";
    }

    const profile = {};

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
      linkedin.connections.retrieve(function (err, connections) {
        // Here you go! Got your connections!
        console.log(err, connections)
      });

    }

  },
  'twitter.fetch'(accessToken, accessTokenSecret, twitterId, userId){
    return new Promise((resolve, reject) => {
      const bound = Meteor.bindEnvironment((callback) => {
        callback();
      });

      if (Meteor.isServer) {

        let listCursor = 0;
        let userFriends = [];
        let loop = 0;

        const getMoreFriends = (twitter, params, callback) => {
          if (listCursor > 0 && loop <= 13) {
            params.cursor = listCursor;
            twitter.get('friends/list', params, (err, list, res) => {
              console.log("Page", loop, listCursor)
              bound(() => {
                if (!!err) {
                  console.log(err);
                  reject(err);
                }
                else {
                  list.users.forEach((u) => {
                    const info = {
                      firstName: u.name,
                      lastName: u.screen_name,
                      alternateName: u.screen_name,
                    };
                    userFriends.push({userId: userId, platform: "twitter", info, dateUpdated: new Date()});
                  });

                  listCursor = list.next_cursor;
                  params.cursor = listCursor;

                  if (listCursor > 0) {
                    loop++;
                    getMoreFriends(twitter, params, (err, res)=>{});
                  } else {
                    console.log("All friends imported succesfully. Inserting now to database...");
                    Contacts.remove({userId: userId, platform: "twitter"});
                    userFriends.forEach((friend)=> {
                      Contacts.insert(friend);
                    });
                    // Contacts.insertMany(userFriends);
                    resolve(userFriends)
                  }
                }
              })
            });
          }
        };

        Fibers(function () {
          const twitter = new Twitter({
            consumer_key: Meteor.settings.twitter.consumerKey,
            consumer_secret: Meteor.settings.twitter.secret,
            access_token_key: accessToken,
            access_token_secret: accessTokenSecret
          });

          let params = {user_id: twitterId, count: 200, skip_status: true, include_user_entities: false};

          twitter.get('users/show', params, (err, res)=> {

            bound(() =>{
              if (err) {
                console.log(err)
                reject(err)
              }

              const friendCount = res.friends_count;
              console.log(res.screen_name, "Total Friends:",friendCount);


              twitter.get('friends/list', params, (err, list, res) => {
                bound(() => {
                  if (!!err) {
                    console.log(err);
                    reject(err);
                  }
                  else {
                    list.users.forEach((u) => {
                      const info = {
                        firstName: u.name,
                        lastName: u.screen_name || u.name,
                      };
                      userFriends.push({userId: userId, platform: "twitter", info, dateUpdated: new Date()})
                    });

                    listCursor = list.next_cursor;
                    params.cursor = listCursor;

                    if (listCursor > 0) {
                      getMoreFriends(twitter, params, (err, res)=>{});
                    } else {
                      console.log("All friends imported succesfully. Inserting now to database...");
                      Contacts.remove({userId: userId, platform: "twitter"});
                      userFriends.forEach((friend)=> {
                        Contacts.insert(friend);
                      });
                      // Contacts.insertMany(userFriends);
                      resolve(userFriends)
                    }
                  }
                });
              });

            });
          })
        }).run();

      }
    })

  }
});