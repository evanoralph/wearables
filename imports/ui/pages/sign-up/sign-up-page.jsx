import React from 'react';

import SignUpForm from '../../components/sign-up/sign-up-form/sign-up-container';
import HeaderNav from '../../components/header/header-nav/header-nav-container';

class SignUpPage extends React.Component {

  render() {

    return(
      <section id="sign-up-page" className="row no-padding no-margin">
        <HeaderNav title="SIGN UP" path="/login"/>
        <SignUpForm/>
      </section>
    )
  }
};

export default SignUpPage;