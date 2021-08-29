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
import Favorites from './fav-components/Favorites'



class App extends React.Component {

  render() {
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
            <Route exact path="/favorites">
              <Favorites />
            </Route>
          </Switch>
          <Footer />

        </Router>
      </>
    );
  }
}

export default withAuth0(App);
