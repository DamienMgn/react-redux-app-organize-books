import React, {Component} from 'react';

import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { userFetchLogin } from '../../../redux/actions/authActions'
import { Form, Icon, Input, Button } from 'antd';
import '../sign.css'


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
    return (
      <div className="sign">
        <Form onSubmit={this.handleSubmit} className="sign-form" method="POST">
          <Form.Item className="sign-form-item">
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item className="sign-form-item">
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                name='password'
                placeholder="Password"
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item className="sign-form-item">
            <Button type="primary" htmlType="submit" className="sign-form-button">
              Log in
            </Button>
            <div>
              Or <Link to="/register">register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userFetchLogin: userInfo => dispatch(userFetchLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
