import React from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";

import { connect } from 'react-redux'

const PrivateRouteAuth = ({ isRegistred, currentUser, children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

const mapStateToProps = state => {
    return {
        currentUser: state.user,
    }
}

export default connect(mapStateToProps)(PrivateRouteAuth);