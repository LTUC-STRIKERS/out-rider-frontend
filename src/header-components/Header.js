import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from '../auth-components/LoginButton';
import LogoutButton from '../auth-components/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Container } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    const { isAuthenticated,user } = this.props.auth0;

    return (


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Out Rider</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            
          <Link className="ml-auto" to="/">Home</Link>
          <Link className="ml-auto" to="/profile">Profile</Link>
          <Link className="ml-auto" to="/favorites">Favorites</Link>
          <Link className="ml-auto" to="/MyFavorite">MY Favorites</Link>

          </Nav>
          
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}

          </Navbar.Collapse>
        </Container>
      </Navbar>




    );
  }
}

export default withAuth0(Header);
