import React from 'react';
import {connect} from 'react-redux';
import {required,password,email} from '../../../../lib/validations';
import { Link } from 'react-router-dom';

class SocialMediaButton extends React.Component {


  userLoginGoogle(){
    this.props.userLoginGoogle()
  }

  loginWithFacebook(){
    this.props.loginWithFacebook()
  }

  render() {
    return(
      <div id="social-media-button" className="row no-padding no-margin" >
        <div className="col-xs-12 title">SIGN UP</div>
        <div className=" col-xs-12 no-padding sm-button">
          <div className="row button middle-xs center-xs" onClick={this.loginWithFacebook.bind(this)}><span className="fa fa-facebook-square"></span>FACEBOOK</div>
        </div>
        <div className="col-xs-12 no-padding sm-button">
          <div className="row button middle-xs center-xs" onClick={this.userLoginGoogle.bind(this)}><span className="fa fa-google-plus"></span>GOOGLE</div>
        </div>
        <div className="col-xs-12 no-padding or">- OR -</div>
        <div className="col-xs-12 no-padding sm-button">
          <Link to="/sign-up"><div className="row button middle-xs center-xs"><span className="fa fa-envelope-o"></span>EMAIL</div></Link>
        </div>
        <div className="col-xs-12 no-padding sign-up">
          Already have an account? <Link to="/login"><u>LOGIN</u></Link>
        </div>
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SocialMediaButton);