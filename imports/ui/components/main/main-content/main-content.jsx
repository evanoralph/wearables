import React from 'react';
import {connect} from 'react-redux';
import {required} from "../../../../lib/validations";
import HeaderNav from '../../../components/header/header-nav/header-nav-container';


class MainContent extends React.Component {

  render() {
    return(
      <div id="main-page" className="row middle-xs no-margin">
        <div className="col-xs-12 no-padding">
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainContent);