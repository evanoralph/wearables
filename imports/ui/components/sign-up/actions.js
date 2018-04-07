import {browserHistory} from 'react-router';

export default {
  register({Meteor},data){
    console.log(data);
    Meteor.call('users.add',data,(err,response)=>{
      console.log(err,response);
      alert("register");
    })
  }
}