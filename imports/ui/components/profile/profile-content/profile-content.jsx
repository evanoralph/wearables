import React from 'react';
import {connect} from 'react-redux';
import {required} from "../../../../lib/validations";
import HeaderNav from '../../../components/header/header-nav/header-nav-container';

class ProfileContent extends React.Component {

  render() {
    return(
      <div id="profile-content" className="row middle-xs no-margin">
        <div className="col-xs-12 no-padding">
          PROFILE CONTENT
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ProfileContent);