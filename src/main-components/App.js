import React from 'react';
import Header from '../header-components/Header';
import Main from './Main';
import Footer from '../footer-components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from "./Profile"
import { withAuth0 } from '@auth0/auth0-react';
import Favorites from './fav-components/Favorites'
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      cityName: '',
      status: false,
      statusText: '',
      cityLocation: {}

    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    // this.props.history.push('/')
    await this.setState({
      cityName: e.target.cityName.value,
    });

    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`).then(locationData => {
      // console.log("location data"+locationData);
      this.setState({
        cityLocation: locationData.data[0],
        status: locationData.status,
        statusText: locationData.statusText,
      })
    }).catch((error) => {
      if (error.response) {
        this.setState({
          status: error.response.status,
          statusText: error.response.data.error,
        })
      }
    });

    try {
      let restuarants = await axios.get(`${process.env.REACT_APP_SERVER}/restaurants?cityName=${this.state.cityName}`);
      this.setState({
        restaurants: restuarants.data,
      })

    } catch (error) {
      console.log("ERROR")
    }
    // window.location.href ='/'


  }

  render() {
    return (
      <>
        <Router>
          <Header getLocation={this.getLocation} />
          <Switch>
            <Route exact path="/" >
              <Main restaurants={this.state.restaurants} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/favorites">
              <Favorites cityData={this.state} />
            </Route>
          </Switch>
          <Footer />

        </Router>
      </>
    );
  }
}

export default withAuth0(App);
