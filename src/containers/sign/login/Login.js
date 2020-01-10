import React, {Component} from 'react';

import { Link } from "react-router-dom";

import { connect } from 'react-redux'
import { userFetchLogin } from '../../../redux/actions/authActions'
import { Form, Icon, Input, Button, Alert } from 'antd';
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
          <div className="sign-form-intro">
            <p>Cette application a été développée avec React/Redux. C'est une démo, la base de donnée est vidée régulièrement.</p>
            <p>Image: <a href="https://unsplash.com/">Unsplash</a></p>
          </div>
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
                placeholder="Mot de passe"
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item className="sign-form-item">
            <Button type="primary" htmlType="submit" className="sign-form-button">
              Connexion
            </Button>
            <div>
              Ou <Link to="/register">Créer un compte !</Link>
            </div>
          </Form.Item>
          {this.props.error != null ? <Alert message={this.props.error} type="error" /> : null}
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userFetchLogin: userInfo => dispatch(userFetchLogin(userInfo))
})

const mapStateToProps = state => ({
  error: state.auth.loginError
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
