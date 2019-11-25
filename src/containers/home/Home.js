import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import SearchPage from '../search/SearchPage'
import CurrentBook from '../../components/currentBook/CurrentBook'
import BooksCategory from '../booksCategory/BooksCategory'

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { userFetchLogout } from '../../redux/actions/authActions'

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
          <Route exact path={'/'}>
            <h1>Accueil</h1>
          </Route>
          <Route exact path={`/rechercher`}>
            <SearchPage />
          </Route>
          <Route path={`/bibliotheque`}>
            <BooksCategory category={1}/>
          </Route>
          <Route path={`/pal`}>
            <BooksCategory category={2}/>
          </Route>
          <Route path={`/wish-list`}>
            <BooksCategory category={3}/>
          </Route>
          <Route path={`/rechercher/:book_id`} component={CurrentBook} />
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
    userFetchLogout: () => dispatch(userFetchLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);