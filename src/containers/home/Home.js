import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import SearchPage from '../../containers/search/SearchPage'

import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { userFetchLogout } from '../../redux/actions/authActions'

import './home.css'

import { Layout } from 'antd';

const { Content } = Layout;

const Home = ({userFetchLogout, currentUser}) => {

  let { path, url } = useRouteMatch();

  const logout = () => {
    userFetchLogout()
  } 

  return (
  <Layout className="home" theme="light">
    <Router>
      <Sidebar url={url}/>
    <Layout>
      <Header logout={logout} currentUser={currentUser}/>
      <Content style={{ margin: '24px 16px 0' }}>
        <Switch>
          <Route exact path={path}>
            <SearchPage />
          </Route>
          <Route path={`${path}bibliotheque`}>
            <h1>bibliotheque</h1>
          </Route>
          <Route path={`${path}pal`}>
            <h1>Pile à lire</h1>
          </Route>
          <Route path={`${path}wish-list`}>
            <h1>Wish List</h1>
          </Route>
        </Switch>
      </Content>
    </Layout>
    </Router>
  </Layout>
  );
}

const mapStateToProps = state => ({
    currentUser: state.user
})

const mapDispatchToProps = dispatch => ({
    userFetchLogout: () => dispatch(userFetchLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);