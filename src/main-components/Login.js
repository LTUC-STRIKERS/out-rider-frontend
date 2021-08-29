import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from '../auth-components/LoginButton';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem',margin:'20px auto' }}>
          <Card.Header>Login Using Auth0</Card.Header>

        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButton/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;