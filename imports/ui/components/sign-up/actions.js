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
    Meteor.loginWithFacebook({
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

      Meteor.loginWithGoogle({
        loginStyle: "redirect" ,
        'webClientId': '825480306969-uglck4esst2m4urn33fl92qb5mjkbiih.apps.googleusercontent.com',
        requestPermissions: ['email'],
        loginUrlParameters: {include_granted_scopes: true},
        requestOfflineToken: true,
        requestPermissions: ['email', 'profile'],

      }, (error) => {
        if (error) swal({text:error});
        
        history.push("/main")
      });
    } else { // signIn through browser
      if (Accounts.loginServicesConfigured()) {
        Meteor.loginWithGoogle({

          loginStyle: "redirect" ,
          'webClientId': '825480306969-uglck4esst2m4urn33fl92qb5mjkbiih.apps.googleusercontent.com',
          requestPermissions: ['email'],
          loginUrlParameters: {include_granted_scopes: true},
          requestOfflineToken: true,
          requestPermissions: ['email', 'profile'],

        }, (error) => {
          if (error) swal({text:error});
        });
      }
    }

  }
}