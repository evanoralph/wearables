import React from 'react';
import {connect} from 'react-redux';

class ImportButtons extends React.Component {


  logFb(){
    this.props.loginWithFacebook();
  }

  logGoogle(){
    this.props.userLoginGoogle();
  }

  render() {
    return(
      <div id="import-buttons" className="row no-padding no-margin" >
        <div className="instructions">Click one on the apps below to proceed</div>
        <div className="buttons-container">
          <div className="button-item"></div>
          <div className="button-item"></div>
          <div className="button-item"></div>
          <div className="button-item"></div>
          <div className="button-item"></div>
          <div className="button-item"></div>
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