import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Index extends React.Component {

  render() {
    return(
    <div id="index-page" className="Index">
      <div className="logo"></div>
      <div className="col-xs-12 no-padding sm-button">
        <Link to="/sign-up-selection"><div className="row button middle-xs center-xs">SIGN UP</div></Link>
      </div>
      <div className="col-xs-12 no-padding sm-button">
        <Link to="/login-selection"><div className="row button middle-xs center-xs">LOG IN</div></Link>
      </div>
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Index);