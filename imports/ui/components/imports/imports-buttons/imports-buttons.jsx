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
          // if (result.value) {
          //     swal(
          //         'Deleted!',
          //         'Your file has been deleted.',
          //         'success'
          //     )
          // }
      })
  }

  render() {
    return(
      <div id="import-buttons" className="row no-padding no-margin" >
        <div className="instructions">Click one of the apps below to proceed</div>
        <div className="buttons-container">
          <div className="button-item" id="phoneImport" onClick={this.openImportDialog.bind(this, "PHONE")}></div>
          <div className="button-item" id="facebookImport" onClick={this.openImportDialog.bind(this, "FACEBOOK")}></div>
          <div className="button-item" id="googleImport" onClick={this.openImportDialog.bind(this, "GOOGLE+")}></div>
          <div className="button-item" id="whatsappImport" onClick={this.openImportDialog.bind(this, "WHATSAPP")}></div>
          <div className="button-item" id="linkedinImport" onClick={this.openImportDialog.bind(this, "LINKEDIN")}></div>
          <div className="button-item" id="twitterImport" onClick={this.openImportDialog.bind(this, "TWITTER")}></div>
        </div>
        <div className="reminder">
          Need to import contacts from at least one app to finish setup
        </div>
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ImportButtons);