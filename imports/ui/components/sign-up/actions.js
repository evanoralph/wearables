import {browserHistory} from 'react-router';

export default {
  register({Meteor},data){
    console.log(data);
    Meteor.call('users.add',data,(err,response)=>{
      console.log(err,response);
      alert("register");
    })
  },
  loginWithFacebook(){
    Meteor.loginWithFacebook({
      loginStyle: "popup" ,
      requestPermissions: ['email']
    }, function (err) {
      if (err) {
        alert("error when login with facebook " + err);
        return;
      }
      alert("log!!")
    });
  },
  userLoginGoogle({Meteor}){

    if (Meteor.isCordova) { // signIn through cordova
      Meteor.cordova_g_plus({
        cordova_g_plus: true,
        profile: ["email", "email_verified", "gender", "locale", "name", "picture"],
        webClientId: '825480306969-uglck4esst2m4urn33fl92qb5mjkbiih.apps.googleusercontent.com',
      }, (error) => {
        if (error) {
          // error handling code
        }
      });
    } else { // signIn through browser
      if (Accounts.loginServicesConfigured()) {
        Meteor.loginWithGoogle({

          requestOfflineToken: true,
          requestPermissions: ['email', 'profile'],

        }, (error) => {
          if (error) alert(error);
        });
      }
    }

  }
}