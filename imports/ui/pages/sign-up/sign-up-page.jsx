import React from 'react';

import SignUpForm from '../../components/sign-up/sign-up-form/sign-up-container';
import HeaderNav from '../../components/header/header-nav/header-nav-container';

class SignUpPage extends React.Component {

  render() {

    return(
      <section id="sign-up-page" className="page-container row no-padding no-margin">
        <HeaderNav title="SIGN UP" path="/sign-up-selection"/>
        <SignUpForm history={this.props.history}/>
      </section>
    )
  }
};

export default SignUpPage;