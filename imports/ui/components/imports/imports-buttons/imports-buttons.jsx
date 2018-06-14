import React from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert2';

import Linkedin from 'node-linkedin';

class ImportButtons extends React.Component {

  constructor(props) {
    super(props);
  }


  logFb(){
    this.props.loginWithFacebook();
  }

  logGoogle(){
    this.props.userLoginGoogle();
  }

  openImportDialog(network) {
      swal({
          text: `IMPORT ${network} CONTACTS`,
          showCancelButton: true,
          confirmButtonColor: '#726D6D',
          cancelButtonColor: '#FFF',
          confirmButtonText: 'IMPORT',
          cancelButtonText: 'CANCEL',
          reverseButtons: true,
      }).then((result) => {
          if (result.value) {

            switch (network) {
              case "LINKEDIN":
                this.props.loginWithLinkedin((res)=>{
                  Meteor.call('linkedin.fetch', this.props.user.services.linkedin.accessToken, (err,res)=>{
                    swal({
                      title: "LinkedIn Contacts Not Supported Yet",
                      type: "error"
                    });
                  })
                });
                break;
              case "PHONE":
                swal({
                  title: "Importing Contacts...",
                  onOpen: () => {
                    swal.showLoading()
                  },
                  showConfirmButton: false,
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                });
                this.props.importPhoneContacts(this.props.history, Meteor.userId());
                break;
              case "TWITTER":
                if (Meteor.user().services.twitter) {
                  console.log("TWITTER ALREADY LINKED");
                  swal({
                    title: "Synchronizing Contacts...",
                    onOpen: () => {
                      swal.showLoading()
                    },
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                  });
                  let {accessToken, accessTokenSecret, id} = Meteor.user().services.twitter;
                  this.props.importTwitterFriends(this.props.history, accessToken, accessTokenSecret, id, Meteor.userId());
                } else {
                  this.props.loginWithTwitter((res)=>{
                    console.log("TWITTER LOGIN RESULT:", res);
                    swal({
                      title: "Importing Contacts...",
                      onOpen: () => {
                        swal.showLoading()
                      },
                      showConfirmButton: false,
                      allowOutsideClick: false,
                      allowEscapeKey: false,
                    });
                    setTimeout(()=>{
                      let {accessToken, accessTokenSecret, id} = Meteor.user().services.twitter;
                      this.props.importTwitterFriends(this.props.history, accessToken, accessTokenSecret, id, Meteor.userId());
                    }, 3000)
                  });
                }
                break;
              case "GOOGLE+":
                // console.log(this.props.user.services.google);
                console.log("Call Login");
                if (Meteor.user().services.google) {
                  console.log("GOOGLE ALREADY LINKED");
                  swal({
                    title: "Synchronizing Contacts...",
                    onOpen: () => {
                      swal.showLoading()
                    },
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                  });
                  this.props.importGoogleContacts(this.props.history, null, null, null, null, null, Meteor.userId());
                } else {
                  this.props.loginWithGoogle((res)=>{
                    console.log("GOOGLE LOGIN RESULT:", res);
                    swal({
                      title: "Importing Contacts...",
                      onOpen: () => {
                        swal.showLoading()
                      },
                      showConfirmButton: false,
                      allowOutsideClick: false,
                      allowEscapeKey: false,
                    });
                    setTimeout(()=>{
                      this.props.importGoogleContacts(this.props.history, null, null, null, null, null, Meteor.userId());
                    }, 3000);
                  });
                }
                break;
              default:
                swal({
                  title: "Importing Contacts...",
                  onOpen: () => {
                    swal.showLoading()
                  },
                  showConfirmButton: false,
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                });
                this.props.importPhoneContacts(this.props.history, Meteor.userId());
                break;
            }

          }
      })
  }


  render() {
    return(
      <div id="import-buttons" className="row no-padding no-margin" >
        <div className="content">
          Import your contacts so you can select the key people in your life.
          The jewelry will vibrate whenever they reach out to you.
        </div>
        <div className="instructions">Click one of the apps below to proceed.</div>
        <div className="buttons-container">
            <div className="button-grid"><div className="button-item android" id="phoneImport" onClick={this.openImportDialog.bind(this, "PHONE")}></div></div>
            <div className="button-grid"><div className="button-item" id="whatsappImport" onClick={this.openImportDialog.bind(this, "WHATSAPP")}></div></div>
            <div className="button-grid"><div className="button-item" id="facebookImport" onClick={this.openImportDialog.bind(this, "FACEBOOK")}></div></div>
            <div className="button-grid"><div className="button-item" id="googleImport" onClick={this.openImportDialog.bind(this, "GOOGLE+")}></div></div>
            <div className="button-grid"><div className="button-item" id="twitterImport" onClick={this.openImportDialog.bind(this, "TWITTER")}></div></div>
            <div className="button-grid"><div className="button-item" id="linkedinImport" onClick={this.openImportDialog.bind(this, "LINKEDIN")}></div></div>
        </div>
        <div className="reminder">
          Need to import contacts from at least one app to finish setup.
        </div>
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ImportButtons);