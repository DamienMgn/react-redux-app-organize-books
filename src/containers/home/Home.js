import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Search from '../search/Search'
import CurrentBook from '../../components/currentBook/CurrentBook'
import Category from '../category/Category'

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { userFetchLogout } from '../../redux/actions/authActions'
import { restoreBooksState } from '../../redux/actions/booksActions'


import './home.css'

import { Layout } from 'antd';

const { Content } = Layout;

const Home = ({userFetchLogout, currentUser}) => {

  const logout = () => {
    userFetchLogout()
  }

  return (
  <Layout className="home" theme="light">
    <Router>
      <Sidebar />
    <Layout>
      <Header logout={logout} currentUser={currentUser}/>
      <Content style={{ margin: '24px 16px 0' }}>
        <Switch>
          <Route exact path={`/`}>
            <Search />
          </Route>
          <Route path={`/bibliotheque`}>
            <Category category={1}/>
          </Route>
          <Route path={`/pal`}>
            <Category category={2}/>
          </Route>
          <Route path={`/wish-list`}>
            <Category category={3}/>
          </Route>
          <Route path={`/:book_id`} render={(props) => <CurrentBook {...props} lastUrl={window.location.href} />} />
        </Switch>
      </Content>
    </Layout>
    </Router>
  </Layout>
  );
}


const mapStateToProps = state => ({
    currentUser: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    userFetchLogout: () => dispatch(userFetchLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);