import React from "react";
import Header from "../header-components/Header";
import Main from "./Main";
import Footer from "../footer-components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import MyFavorites from "./MyFavorites";
import { withAuth0 } from "@auth0/auth0-react";
import Favorites from "./fav-components/Favorites";
import AboutUs from "./AboutUs";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      cityName: "",
      status: false,
      statusText: "",
      cityLocation: {},
      email: "",
      dataOfMyFav: [],
    };
  }
  addRestaurantToMyFav = async (
    name,
    rating,
    image_url,
    phone,
    review_count,
    url,
    id,
  ) => {
    const { user } = this.props.auth0;
    console.log(this.props.auth0);
    if (user !== undefined) {
      let userEmail = user.email;

      let newData = {
        name: name,
        rating: rating,
        image_url: image_url,
        email: userEmail,
        phone: phone,
        review_count: review_count,
        url: url,
        id: id,
      };
      console.log("dffdgfdgfgf", newData);
      let favRestaurants = await axios.post(
        `${process.env.REACT_APP_SERVER}/addrestomyfavorite`,
        newData
      );
      this.setState({
        dataOfMyFav: favRestaurants.data,
      });
    }
    console.log("iside addRestaurantToMyFav: ", this.state.dataOfMyFav);
  };

  getLocation = async (e) => {
    e.preventDefault();
    // this.props.history.push('/')
    await this.setState({
      cityName: e.target.cityName.value,
    });

    axios
      .get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`
      )
      .then((locationData) => {
        // console.log("location data"+locationData);
        this.setState({
          cityLocation: locationData.data[0],
          status: locationData.status,
          statusText: locationData.statusText,
        });
        console.log('sssssssssssssssssssss',this.state.cityLocation);
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            status: error.response.status,
            statusText: error.response.data.error,
          });
        }
      });

    try {
      let restaurants = await axios.get(
        `${process.env.REACT_APP_SERVER}/restaurants?cityName=${this.state.cityName}`
      );
      await this.setState({
        restaurants: restaurants.data,
      });
      console.log(' insid rasturant:',this.state.restaurants);
    } catch (error) {
      console.log("ERROR");
    }
    // window.location.href ='/'
  };

  render() {
    return (
      <>
        <Router>
          <Header getLocation={this.getLocation} />
          <Switch>
            <Route exact path="/">
              <Main
                addRestaurantToMyFav={this.addRestaurantToMyFav}
                restaurants={this.state.restaurants}
              />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>

            <Route exact path="/MyFavorite">
              <MyFavorites dataOfMyFav={this.state.dataOfMyFav} />
            </Route>
            <Route exact path="/favorites">
              <Favorites cityData={this.state} />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default withAuth0(App);
