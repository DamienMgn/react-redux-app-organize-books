import React, {Component} from 'react';

import { connect } from 'react-redux'
import { userFetchLogin } from '../../../redux/actions/authActions'
import { Form, Icon, Input, Button } from 'antd';
import './login.css'


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userFetchLogin(this.state);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form" method="POST">
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                name="email"
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                name='password'
                placeholder="Password"
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="http://google.fr">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userFetchLogin: userInfo => dispatch(userFetchLogin(userInfo))
})

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
