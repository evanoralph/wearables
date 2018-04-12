import React  from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutesAuthenticated = ({ loggingIn, authenticated,open,onSetOpen, component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (loggingIn) return <div></div>;
    return authenticated ?
    (React.createElement(component, { ...props, loggingIn, authenticated, onSetOpen, open  })) :
    (<Redirect to="/" />);
  }} />
);

RoutesAuthenticated.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
  component: PropTypes.func,
};

export default RoutesAuthenticated;