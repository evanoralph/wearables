import React  from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePublic = ({ loggingIn, authenticated, component, onSetOpen, open, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log(props)
    if (loggingIn) return <div></div>;
    return !authenticated ?
    (React.createElement(component, { ...props, loggingIn, authenticated, onSetOpen, open  })) :
    (<Redirect to="/main" />);
  }} />
);

RoutePublic.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func,
};

export default RoutePublic;