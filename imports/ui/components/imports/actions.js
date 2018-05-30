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
}