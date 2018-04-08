import React from 'react';
import {connect} from 'react-redux';

import Content from '../../components/main/main-content/main-content-container';
import HeaderSettings from '../../components/header/header-settings/header-settings-container';

class Main extends React.Component {

  render() {
    return(
      <div id="main-page" className="Index">
        <HeaderSettings/>
        <Content/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);