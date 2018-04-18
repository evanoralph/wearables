import React from 'react';
import SocialMediaButtons from '../../components/sign-up/social-medial-buttons/social-medial-buttons-container';


class SignUpSelectionPage extends React.Component {

  render() {

    return(
      <section id="sign-up-selection-page" className="row no-padding no-margin">
        <div className="col-xs-12 logo">
          <div className="image-container">

          </div>
          <SocialMediaButtons history={this.props.history}/>
        </div>
      </section>
    )
  }
};

export default SignUpSelectionPage;