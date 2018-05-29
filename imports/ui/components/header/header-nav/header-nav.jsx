import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {

    const {title, path, doneButton, img} = this.props;
    
    return(
      <div id="header-nav" className="row no-padding no-margin middle-xs">
        <div className="col-xs-3 header-nav-left-button">
          <Link to={path}><span className="fa fa-chevron-left"></span></Link>
        </div>

        {!!title ? <div className="col-xs-6 header-nav-title">{title}</div> :
          <div className="col-xs-6 header-img" style={{backgroundImage: `url('${img}')`}} /> }

        {!!doneButton ? <div className="col-xs-3 header-nav-right-button">DONE</div> : null }
      </div>
    ) ;
  }

};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);