import React from 'react';
import LoginForm from '../../components/login/login-form-container.js';

class Login extends React.Component {

  render() {

    return(
      <section id="login-page">
        <LoginForm/>
      </section>
    )
  }
};

export default Login;