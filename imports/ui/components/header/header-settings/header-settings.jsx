import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import { Link } from 'react-router-dom';

class HeaderSettings extends React.Component {

  render() {
    
    return(
      <div id="header-settings" className="row no-padding no-margin middle-xs">
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(HeaderSettings);