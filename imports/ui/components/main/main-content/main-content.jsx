import React from 'react';
import {connect} from 'react-redux';


class MainContent extends React.Component {

  render() {
    return(
      <div className="Index">
        content
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainContent);