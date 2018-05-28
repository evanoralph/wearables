import swal from 'sweetalert2';

export default {
  importPhoneContacts({Meteor},contact){
    function onSuccess(contacts) {
      Meteor.call('contact.import.phone',contacts,(err)=>{
        if(err){
          alert(err);
          return;
        }
        swal("Sync Complete");
      })
    };
    navigator.contacts.find(["name"],onSuccess)
  },
}