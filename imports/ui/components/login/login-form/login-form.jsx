import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import {connect} from 'react-redux';
import {required,password,email} from '../../../../lib/validations';
import SocialMediaLogin from '../../login/social-media-login/social-media-login-container';
import serialize from 'form-serialize';
import {MyValidationInput} from '../../../../lib/custom-react-validation';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

  }

  login(e){
    e.preventDefault();
    const form = document.querySelector("#login-form");
    const formData = serialize(form, {hash:true});
    console.log(formData);
    this.props.login(formData,this.props.history);
  }



  render() {
    return(
      <Form
        ref={c => { this.form = c }}
        onSubmit={this.login.bind(this)}
        id="login-form"
        className="row middle-xs no-margin"
      >
          <div className="col-xs-12 no-padding">
            <MyValidationInput type="text"  name='email' placeholder="email" validations={[required]}/>
            <MyValidationInput type='password' name='password' placeholder="password" validations={[required]}/>
            <Button>LOG IN</Button>
            <SocialMediaLogin history={this.props.history}/>
          </div>
      </Form>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(LoginForm);