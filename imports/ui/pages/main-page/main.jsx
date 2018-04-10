import React from 'react';
import {connect} from 'react-redux';
import Sidebar from 'react-sidebar';
import Content from '../../components/main/main-content/main-content-container';
import HeaderSettings from '../../components/header/header-settings/header-settings-container';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      currentUser: props.currentUser,
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

  }


  onSetSidebarOpen = function (open, url) {
    if (!!url) {
      // REDIRECT HERE
      //
      setTimeout(() => {
        this.setState({sidebarOpen: open});
      }, 100)
    } else {
      this.setState({sidebarOpen: open});
    }
  }

  render() {

    var SideMenu =
      <div id="sideNav">
        <div className="side-header">
          <span className="sidebar-title">SETTINGS</span>
        </div>
        <div className="side-menu">
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            CONTACT SETTINGS
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            SUPPORT
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            TERMS OF SERVICE
          </div>
          <div className="side-menu-item"
               onClick={this.onSetSidebarOpen.bind(this, !this.state.sidebarOpen, "/")}>
            PRIVACY POLICY
          </div>
        </div>
      </div>;

    let SideMenuStyles = {
      root: {
        //display: classNames({"none": !this.state.showHeader}),
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1001,
        height: 'calc(100vh - 20px) !important',
      },
      sidebar: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        transition: 'transform .2s ease-in-out',
        WebkitTransition: '-webkit-transform .2s ease-in-out',
        willChange: 'transform',
        overflowY: 'auto',
        backgroundColor: '#F6F4F0',
        height: 'calc(100vh - 20px)',
        padding: '0px',
        pointerEvents: 'auto',
        overflow: 'hidden',
        width: '90vw',
        boxShadow: 'rgba(0, 0, 0, 0.25) 10px 0px 20px !important',
      },
      content: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        transition: 'left .2s ease-in-out, right .2s ease-in-out',
        pointerEvents: 'none',
        height: 'calc(100vh - 20px)',
      },
      overlay: {
        zIndex: 0,
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .2s ease-in-out, visibility .2s ease-in-out',
        backgroundColor: 'rgba(0,0,0,0)',
        height: 'calc(100vh - 20px)',
        pointerEvents: 'none',
        overflow: 'hidden',
      },
      dragHandle: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        bottom: 0,
        pointerEvents: 'auto',
      },
    };

    return(
      <div id="main-page" className="page-container row no-padding no-margi">
        <HeaderSettings onSetOpen={this.onSetSidebarOpen} open={this.state.sidebarOpen} />
        <Content/>
        <Sidebar sidebar={SideMenu} styles={SideMenuStyles}
                 open={this.state.sidebarOpen}
                 onSetOpen={this.onSetSidebarOpen}>
          <div></div>
        </Sidebar>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);