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
  loginWithFacebook(){
    Meteor.linkWithFacebook({
      loginStyle: "popup" ,
      requestPermissions: ['email']
    }, function (err) {
      if (err) {
        swal("error when login with facebook " + err);
        return;
      }
    });
  },
  userLoginGoogle({Meteor},history){

    if (Meteor.isCordova) {

      Meteor.linkWithGoogle({
        loginStyle: "popup" ,
        'webClientId': 'com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih',
        requestPermissions: ['email'],
        loginUrlParameters: {include_granted_scopes: true},
        requestOfflineToken: true,
        requestPermissions: ['email', 'profile', 'https://www.googleapis.com/auth/contacts.readonly'],
      }, (error) => {
        if (error) swal({text:error});
        
        history.push("/main")
      });
    } else { // signIn through browser
      if (Accounts.loginServicesConfigured()) {
        Meteor.linkWithGoogle({
          loginStyle: "popup" ,
          'webClientId': 'com.googleusercontent.apps.825480306969-uglck4esst2m4urn33fl92qb5mjkbiih',
          requestPermissions: ['email'],
          loginUrlParameters: {include_granted_scopes: true},
          requestOfflineToken: true,
          requestPermissions: ['email', 'profile', 'https://www.googleapis.com/auth/contacts.readonly'],
        }, (error) => {
          if (error) swal({text:error});
        });
      }
    }

  }
}