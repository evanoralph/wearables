import {browserHistory} from 'react-router';

export default {
  login({Meteor},data){
    Meteor.loginWithPassword(data.email, data.password, function (loginErr) {
      browserHistory.push("/home");
    });
  }
}