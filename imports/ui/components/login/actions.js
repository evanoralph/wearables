import {browserHistory} from 'react-router';

export default {
  login({Meteor},data){
    Meteor.loginWithPassword(data.email, data.password, function (loginErr) {
      browserHistory.push("/home");
    });
  },
  loginWithFacebook(){
    Meteor.loginWithFacebook({
      loginStyle: "popup" ,
      requestPermissions: ['email']
    }, function (err) {
      if (err) {
        alert("error when login with facebook " + err);
      }

      alert("log!!")
    });
  }
}