import React, { Component } from 'react'

import { connect } from 'react-redux'
import { userFetchIsLogged } from './redux/actions/authActions'

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import PrivateRouteAuth from './components/PrivateRouteAuth'

import Login from './containers/sign/login/Login'
import Register from './containers/sign/register/Register'
import Home from './containers/Home'
import Loader from './components/loader/Loader'

import './style/App.css';
import 'antd/dist/antd.css';


class App extends Component {

  componentDidMount = () => {
        this.props.userFetchIsLogged()
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
  isLoading: state.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
