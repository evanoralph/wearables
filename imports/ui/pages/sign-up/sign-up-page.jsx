import React from 'react';

import SignUpForm from '../../components/sign-up/sign-up-form/sign-up-container';
import HeaderNav from '../../components/header/header-nav/header-nav-container';

class SignUpPage extends React.Component {

  render() {

    return(
      <section id="sign-up-page">
        <HeaderNav title="SIGN UP"/>
        <SignUpForm/>
      </section>
    )
  }
};

export default SignUpPage;