import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class MapState extends React.Component {

  render() {

    const {name , component , exact, path} = this.props

    return(
      <Route exact={exact} name={name} path={path} component={component}/>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MapState);