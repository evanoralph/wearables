import {browserHistory} from 'react-router';
import swal from 'sweetalert2';


export default {
  register({Meteor},data,history){
    console.log(data);
    Meteor.call('users.add',data,(err,response)=>{
      console.log(err,response);

      if(err){
        swal({
          text:err
        })
      }

      if(response.userId){
        swal({text:"Registration Successful"});
        Meteor.loginWithPassword(data.email, data.password,(loginErr)=>{
          if(loginErr){
            swal({
              text:"error login please try again"
            })
          }
          history.push("/main");
        });
      }
    })
  },
  loginWithFacebook({Meteor},history){
    Meteor.loginWithFacebook({
      loginStyle: "popup" ,
      requestPermissions: ['email','user_friends']
    }, function (err) {
      if (err) {
        swal("error when login with facebook " + err);
        return;
      }
      history.push("/main")
    });
    // Meteor.loginWithTwitter({
    //   requestPermissions: ['basic'] // cu
    // }, function (err) {
    //   if (err) {
    //     swal("error when login with facebook " + err);
    //     return;
    //   }
    //   history.push("/main")
    // });
  },
  userLoginGoogle({Meteor},history){

    if (Meteor.isCordova) { // signIn through cordova
      Meteor.loginWithGoogle({
        loginStyle: "popup" ,
        'webClientId': 'com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih',
        loginUrlParameters: {include_granted_scopes: true,scope:'https://www.googleapis.com/auth/contacts.readonly'},
        requestOfflineToken: true,
        requestPermissions: ['email', 'profile', 'https://www.googleapis.com/auth/contacts.readonly'],
      }, (error) => {
        if (error) alert(error);

        history.push("/main");
      });
      // Meteor.cordova_g_plus({
      //   cordova_g_plus: true,
      //   profile: ["email", "email_verified", "gender", "locale", "name", "picture"],
      //   webClientId: '825480306969-uglck4esst2m4urn33fl92qb5mjkbiih.apps.googleusercontent.com',
      // }, (error) => {
      //   if (error) {
      //     // error handling code
      //   }
      // });
    } else { // signIn through browser
      if (Accounts.loginServicesConfigured()) {
        Meteor.loginWithGoogle({
          loginStyle: "popup" ,
          'webClientId': 'com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih',
          loginUrlParameters: {include_granted_scopes: true},
          requestOfflineToken: true,
          requestPermissions: ['email', 'profile', 'https://www.googleapis.com/auth/contacts.readonly'],
        }, (error) => {
          if (error) alert(error);
        });
      }
    }

  }
}