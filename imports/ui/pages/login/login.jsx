import React from 'react';
import LoginForm from '../../components/login/login-form/login-form-container';
import HeaderNav from '../../components/header/header-nav/header-nav-container';

class Login extends React.Component {

  render() {

    return(
      <section id="login-page" className="page-container row no-padding no-margin">
        <HeaderNav title="LOG IN" path="/sign-up"/>
        <LoginForm/>
      </section>
    )
  }
};

export default Login;