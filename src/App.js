import React from 'react';

import Login from './containers/sign/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import './style/App.css';
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Public Page</Link>
        <Switch>
          <PrivateRoute exact path="/">
            <div>Home</div>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
