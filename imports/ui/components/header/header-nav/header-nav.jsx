import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  toggleMenu() {

  }

  render() {

    const {title, path, logo, menu} = this.props;
    
    return(
      <div id="header-nav" className="row no-padding no-margin middle-xs">
        <div className="col-xs-3 header-nav-left-button">
          <Link to={path}><span className={classNames({"fa fa-chevron-left": true, "hide": !!logo})}></span></Link>
          <span className={classNames({"logo-header": true, "hide": !logo})}><img src="/img/unplugged-logo-horizontal.png" /></span>
        </div>
        <div className="col-xs-6 header-nav-title">{title}</div>
        <div className="col-xs-3 header-nav-right-button"></div>
        <div className={classNames({"menu-header": true, "hide": !menu})} onClick={this.toggleMenu.bind(this)}/>
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);