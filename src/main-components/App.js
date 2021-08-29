import React from 'react';
import Header from '../header-components/Header';
import Main from './Main';
import Footer from '../footer-components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile"
// import MyFavorite from "./MyFavorite"
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" >
              {this.props.auth0.isAuthenticated ? <Main /> : <Login />}
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />

        </Router>
      </>
    );
  }
}

export default withAuth0(App);
