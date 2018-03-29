import React from 'react';
import {connect} from 'react-redux';

class Index extends React.Component {

  render() {
    return(
    <div className="Index">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a>
      </p>
      <p style={ {fontSize: '16px', color: '#aaa'} }>Currently at v4.15.0</p>
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Index);