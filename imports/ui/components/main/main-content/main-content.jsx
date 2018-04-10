import React from 'react';
import {connect} from 'react-redux';
import {required} from "../../../../lib/validations";


class MainContent extends React.Component {

  render() {
    return(
      <div id="main-page" className="page-container row middle-xs no-margin">
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