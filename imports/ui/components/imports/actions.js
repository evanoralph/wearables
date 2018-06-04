import swal from 'sweetalert2';

export default {
  importPhoneContacts({Meteor},history){
    function onSuccess(contacts) {
      Meteor.call('contact.import.phone',contacts,(err)=>{
        if(err){
          alert(err);
          return;
        }
        swal("Sync Complete");
        history.push('/contacts-list')
      })
    };
    navigator.contacts.find(["name"],onSuccess)
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
}