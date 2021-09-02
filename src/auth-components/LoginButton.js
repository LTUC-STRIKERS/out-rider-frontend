import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginButton() {
  const {isAuthenticated, loginWithRedirect,} = useAuth0();

  return !isAuthenticated && (
    <Button className="mr-2" variant="danger" onClick={loginWithRedirect}>Log In{console.log(loginWithRedirect)}</Button>
    
  );
}

export default LoginButton;