import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import React from 'react';
import {connect} from 'react-redux';
import {required,password,email} from '../../../lib/validations';

class LoginForm extends React.Component {

  render() {
    return(
      <Form id="login-form" className="row middle-xs no-margin">
          <div className="col-xs-12 no-padding">
            <Input value='email@email.com' name='email' placeholder="User Name" validations={[required, email]}/>
            <Input type='password' name='password' placeholder="Password" validations={[required]}/>
            <Button>Submit</Button>
          </div>
      </Form>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(LoginForm);