import React from 'react';
import SocialMediaButtonsLogin from '../../components/sign-up/social-medial-buttons/social-medial-buttons-container-login';

class LoginSelectionPage extends React.Component {

  render() {

    return(
      <section id="sign-up-selection-page" className="row no-padding no-margin">
        <div className="col-xs-12 logo">
          <div className="image-container">

          </div>
          <SocialMediaButtonsLogin/>
        </div>
      </section>
    )
  }
};

export default LoginSelectionPage;