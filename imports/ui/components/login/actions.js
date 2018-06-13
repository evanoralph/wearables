import swal from 'sweetalert2'

export default {
  login({Meteor},data,history){
    Meteor.loginWithPassword(data.email, data.password, function (loginErr) {
      if(loginErr){
        swal({
          text:"error login please try again"
        })
      }
      history.push("/main");
    });
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
      Meteor.linkWithGoogle({

        loginStyle: "redirect" ,
        'webClientId': 'com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih',
        requestPermissions: ['email'],
        loginUrlParameters: {include_granted_scopes: true},
        requestOfflineToken: true,
        requestPermissions: ['email', 'profile'],

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
        Meteor.linkWithGoogle({

          requestOfflineToken: true,
          requestPermissions: ['email', 'profile'],

        }, (error) => {
          if (error) alert(error);
        });
      }
    }

  }
}