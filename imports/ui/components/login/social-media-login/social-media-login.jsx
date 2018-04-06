import React from 'react';
import {connect} from 'react-redux';
import {required,password,email} from '../../../../lib/validations';

class LoginForm extends React.Component {

  render() {
    return(
      <div id="social-media-login" className="row no-padding no-margin" >
        <div className="col-xs-offset-3 col-xs-3 no-padding sm-button-container">
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

export default connect(mapStateToProps)(LoginForm);