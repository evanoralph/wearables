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
    console.log(accessToken, accessTokenSecret)
    Meteor.callPromise('twitter.fetch', accessToken, accessTokenSecret, twitterId, userId,
      Meteor.userId()).then((response) => {
      console.log(response);
      swal("Sync Complete");
      history.push('/contacts-list/twitter')
    }).catch((error) => {
      swal({type: "error", title: "Unable to sync contacts from Twitter.", description: error, onOpen: ()=>{swal.hideLoading()}});
    });
  },
  importGoogleContacts({Meteor}, history, accessToken, googleId, idToken, refreshToken, email, userId){
    console.log("Calling google.fetch");
    Meteor.callPromise('google.fetch', accessToken, googleId, idToken, refreshToken, email, userId,
      Meteor.userId()).then((response) => {
      console.log(response);
      swal("Sync Complete");
      history.push('/contacts-list/googleplus')
    }).catch((error) => {
      swal({type: "error", title: "Unable to sync contacts from Google+.", description: error, onOpen: ()=>{swal.hideLoading()}});
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
        console.log("Error Twitter", err);
        alert("Error logging in with Twitter " + err);
        return;
      } else {
        console.log("Success Twitter", res);
        callback(res);
      }
    });
  },
  loginWithGoogle({Meteor}, callback) {
    console.log("LoginWithGoogle action");
    Meteor.linkWithGoogle({
      loginStyle: "popup" ,
      'webClientId': 'com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih',
      requestPermissions: ['email'],
      loginUrlParameters: {include_granted_scopes: true},
      requestOfflineToken: true,
      requestPermissions: ['email', 'profile', 'https://www.googleapis.com/auth/contacts.readonly'],
    }, function (err, res) {
      console.log("Google login status:", err, res);
      if (err) {
        console.log("Error Google", err);
        alert("Error logging in with Google " + err);
        callback(err);
      } else {
        console.log("Success Google", res);
        callback(res);
      }
    });
  },
}