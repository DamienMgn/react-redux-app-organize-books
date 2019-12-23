import React, { Component } from 'react'

import { connect } from 'react-redux'
import { userFetchIsLogged } from './redux/actions/authActions'

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import PrivateRoute from './utils/PrivateRoute'
import PrivateRouteAuth from './utils/PrivateRouteAuth'

import Login from './containers/sign/login/Login'
import Register from './containers/sign/register/Register'
import Home from './containers/home/Home'
import Loader from './components/loader/Loader'

import 'antd/dist/antd.css';


class App extends Component {

  componentDidMount = () => {
        this.props.userFetchIsLogged();
  }

  render() {
    return (
      <Router>
          {this.props.isLoading ? (
            <Loader />
          ) : (
            <Switch>
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
              <PrivateRouteAuth path="/login">
                <Login />
              </PrivateRouteAuth>
              <PrivateRouteAuth path="/register">
                <Register/>
              </PrivateRouteAuth>
            </Switch>
          )}
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userFetchIsLogged: () => dispatch(userFetchIsLogged())
})

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  currentUser: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
