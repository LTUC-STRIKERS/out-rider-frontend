import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Form,Button,FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from '../auth-components/LoginButton';
import LogoutButton from '../auth-components/LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import { Container } from 'react-bootstrap';

class Header extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Out Rider</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
         
            {isAuthenticated ? <>
              <Nav className="me-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll>

              <Link className="ml-auto" to="/">Home</Link>
              <Link className="ml-auto" to="/profile">Profile</Link>
              <Link className="ml-auto" to="/favorites">Map</Link>
          <Link className="ml-auto" to="/MyFavorite">MY Favorites</Link>

          <Link className="ml-auto" to="/aboutus">ABout Us</Link>
            </Nav>
            <LogoutButton />

            <Form className="d-flex" onSubmit={this.props.getLocation}>
              <FormControl
                placeholder="Enter City Name"
                name="cityName"
                type="search"
                className="mr-2"
                aria-label="Search"
              />
           
              <Button  style={{ marginLeft: "10px" }} variant="outline-success" variant="secondary" type="submit">
              {/* <Redirect  to="/" /> */}
                   Explore!

             
                </Button>
            </Form>
            </>
            : <LoginButton />}

     

          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}

export default withAuth0(Header);
