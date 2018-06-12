import swal from 'sweetalert2';

export default {
  importPhoneContacts({Meteor}, history, userId){
    if (Meteor.isCordova) {
      function onSuccess(contacts) {
        Meteor.call('contact.import.phone',contacts, userId, (err)=>{
          if(err){
            alert(err);
            return;
          }
          swal("Sync Complete");
          history.push('/contacts-list/phone')
        })
      };
      navigator.contacts.find(["name"], onSuccess, (err) => {
        swal({type: "error", title: "Unable to sync contacts from phone.", description: err, onOpen: ()=>{swal.hideLoading()}});
      })
    } else {
      swal({type: "error", title: "Unable to sync contacts from phone.", onOpen: ()=>{swal.hideLoading()}});
      throw new Meteor.Error("Not phone device");
    }
  },
  importTwitterFriends({Meteor}, history, accessToken, accessTokenSecret, twitterId, userId){
    Meteor.callPromise('twitter.fetch', accessToken, accessTokenSecret, twitterId, userId,
      Meteor.userId()).then((response) => {
      console.log(response);
      swal("Sync Complete");
      history.push('/contacts-list/twitter')
    }).catch((error) => {
      swal({type: "error", title: "Unable to sync contacts from Twitter.", description: error, onOpen: ()=>{swal.hideLoading()}});
    });
  },
  loginWithLinkedin({Meteor}, callback) {
    Meteor.linkWithLinkedIn({
      loginStyle: "popup",
      requestPermissions: ['r_basicprofile'],
      clientId: "81xzymrc69mmsj",
      secret: "ZtD1UxBUnLGcgJbZ",
    }, function (err, res) {
      if (err) {
        console.log("Error Linkedin", err);
        alert("Error logging in with LinkedIn " + err);
        return;
      } else {
        console.log("Success LinkedIn", res);
        callback(res);
      }
    });
  },
  loginWithTwitter({Meteor}, callback) {
    Meteor.linkWithTwitter({
      loginStyle: "popup",
      clientId: "HOvTG1Y5ju72jYsZH5yJSw869",
      secret: "3cYwguzD5HPaA8RLtzdqnQrM0WSX0UJOzsbLMTkaKXnIDhQV35",
    }, function (err, res) {
      console.log("Twitter login status:", err, res);
      if (err) {
        console.log("Error Linkedin", err);
        alert("Error logging in with LinkedIn " + err);
        return;
      } else {
        console.log("Success Twitter", res);
        callback(res);
      }
    });
  },
}