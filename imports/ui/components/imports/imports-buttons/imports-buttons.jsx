import React from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert2';

class ImportButtons extends React.Component {


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
        this.props.importPhoneContacts(this.props.history);
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