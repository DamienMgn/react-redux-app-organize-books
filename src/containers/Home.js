import React, {Component} from 'react';
import { connect } from 'react-redux';

import { userFetchLogout } from '../redux/actions/authActions'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  logout = () => {
    this.props.userFetchLogout();
  }

  render() {
    return (
      <div className="home">
        <button onClick={() => this.logout()}>Déconnexion</button>
        <h1>home {this.props.currentUser.user.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    currentUser: state.user
})

const mapDispatchToProps = dispatch => ({
    userFetchLogout: () => dispatch(userFetchLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);