import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component {

  render() {

    const {title} = this.props;
    
    return(
      <div id="header-nav" className="row no-padding no-margin middle-xs">
        <div className="col-xs-4 header-nav-left-button">
          <span className="fa fa-chevron-left "></span>
        </div>
        <div className="col-xs-4 header-nav-title">{title}</div>

        <div className="col-xs-4 rheader-nav-right-button"></div>
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);