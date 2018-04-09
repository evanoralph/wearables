import React from 'react';
import {connect} from 'react-redux';
import {required,password,email} from '../../../../lib/validations';

class SocialMediaLogin extends React.Component {


  logFb(){
    this.props.loginWithFacebook();
  }

  render() {
    return(
      <div id="social-media-login" className="row no-padding no-margin" >
        <div onClick={this.logFb.bind(this)} className="col-xs-offset-3 col-xs-3 no-padding sm-button-container">
          <div className="fa fa-facebook"></div>
        </div>
        <div className="col-xs-3 no-padding sm-button-container">
          <div className="fa fa-google-plus"></div>
        </div>
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SocialMediaLogin);