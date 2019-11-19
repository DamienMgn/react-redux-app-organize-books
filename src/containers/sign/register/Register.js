import React, {Component} from 'react';

import { Link, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import { userFetchRegister } from '../../../redux/actions/authActions'
import { Form, Icon, Input, Button } from 'antd';
import '../sign.css'


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userFetchRegister(this.state, this.props.history);
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
        <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                name="name"
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
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
              Register
            </Button>
            Or <Link to="/login">Login!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userFetchRegister: (userInfo, props) => dispatch(userFetchRegister(userInfo, props))
})

export default withRouter( connect(null, mapDispatchToProps)(Register));