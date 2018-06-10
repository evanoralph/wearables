import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import Linkedin from 'node-linkedin';
import Twitter from 'twitter';
import {Contacts} from '../contacts/contacts.js';
import Fibers from 'fibers'

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
  'twitter.fetch'(accessToken, accessTokenSecret, userId){
    const bound = Meteor.bindEnvironment((callback) => {
      callback();
    });
    if (Meteor.isServer) {

      Fibers(function () {
        const twitter = new Twitter({
          consumer_key: Meteor.settings.twitter.consumerKey,
          consumer_secret: Meteor.settings.twitter.secret,
          access_token_key: accessToken,
          access_token_secret: accessTokenSecret
        });

        let params = {user_id: userId, count: 20, skip_status: true, include_user_entities: false};

        twitter.get('users/show', params, (err, res)=> {

          if (err) {
            console.log(err)
          }

          const friendCount = res.friends_count;
          console.log(res.screen_name, "Total Friends:",friendCount);

          let userFriends = [];
          let listCursor = 0;

          twitter.get('friends/list', params, (err, list, res) => {
            bound(() => {
              if (!!err) {
                console.log(err);
                return reject(err);
              }
              else {
                console.log(list.users.length);
                console.log(list.next_cursor);

                list.users.forEach((u) => {
                  const info = {
                    firstName: u.name,
                    lastName: u.screen_name || u.name,
                  };
                  userFriends.push({userId: this.userId, platform: "twitter", info, dateUpdated: new Date()})
                });

                listCursor = list.next_cursor;

                while (listCursor > 0) {
                  console.log("Looping friends of cursor", listCursor);
                  params.cursor = listCursor;
                  twitter.get('friends/list', params, (err, list, res) => {
                    console.log("Bound 1")
                    bound(() => {
                      if (!!err) {
                        console.log(err);
                        return reject(err);
                      }
                      else {
                        list.users.forEach((u) => {
                          const info = {
                            firstName: u.name,
                            lastName: u.screen_name || u.name,
                          };
                          listCursor = list.next_cursor;
                          userFriends.push({userId: this.userId, platform: "twitter", info, dateUpdated: new Date()})

                        });
                      }
                    })
                  });
                }
                console.log("All friends imported succesfully. Inserting now to database...");
                Contacts.remove({userId: this.userId, platform: "twitter"});
                Contacts.insertMany(userFriends);
              }
            });
          });

            // if (friendCount <= 20) {
            //   twitter.get('friends/list', params, (err, list, res) => {
            //     bound(() => {
            //       if (!!err) {
            //         console.log(err)
            //         return reject(err);
            //       }
            //       else {
            //         console.log(list.users.length);
            //         console.log(list.next_cursor_str);
            //         console.log(list.next_cursor);
            //         Contacts.remove({platform: "twitter"});
            //         list.users.forEach((u) => {
            //           const info = {
            //             firstName: u.name,
            //             lastName: u.screen_name || u.name,
            //           };
            //
            //           Contacts.insert({userId: this.userId, platform: "twitter", info, dateUpdated: new Date()});
            //         });
            //
            //         //
            //       }
            //     });
            //   });
            // } else {
            //   let loop = friendCount / 20;
            //   let count = 1;
            //
            //   if (loop > 1 && loop < 2) {
            //     loop = 2;
            //   }
            //
            //   while (count < loop) {
            //     params.cursor = count;
            //     twitter.get('friends/list', params, (err, list, res) => {
            //       bound(() => {
            //         if (!!err) {
            //           console.log(err)
            //           return reject(err);
            //         }
            //         else {
            //           console.log(list.users,"we");
            //           Contacts.remove({platform: "twitter"});
            //
            //           list.users.forEach((u)=> {
            //             const info = {
            //               firstName: u.name,
            //               lastName: u.screen_name || u.name,
            //             };
            //             Contacts.insert({userId: this.userId, platform: "twitter", info, dateUpdated: new Date()});
            //           });
            //
            //           //
            //         }
            //       })
            //     });
            //     count++;
            //   }
            // }
          })
        }).run();

    }
  }
});