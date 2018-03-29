import React from 'react';
import {connect} from 'react-redux';

import Content from '../../components/main/main-content-container';

class Main extends React.Component {

  render() {
    return(
      <div className="Index">
        <h2>Main</h2>
        <Content/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Main);