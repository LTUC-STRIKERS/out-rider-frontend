import React from "react";
import Header from "../header-components/Header";
import Main from "./Main";
import Footer from "../footer-components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import MyFavorites from "./MyFavorites";
import { withAuth0 } from "@auth0/auth0-react";
// import Favorites from './fav-components/Favorites'
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: "",
      restaurants: [],
      email: "",
      dataOfMyFav: [],
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      searchCity: e.target.city.value,
    });
    console.log("ffrefffff", this.state.searchCity);
    try {
      let restuarants = await axios.get(
        `${process.env.REACT_APP_SERVER}/search?location=${this.state.searchCity}`
      );
      this.setState({
        restaurants: restuarants.data,
      });
    } catch (error) {
      console.log("ERROR");
    }
  };
  ////////////////////////////

  //http://localhost:3001/newfavorite',
  addRestaurantToMyFav = async (name, rating, image_url, phone, review_count, url,id) => {
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
    console.log('wdereeeedecedcee',this.state.dataOfMyFav)
  };
//   stateFunctionData=async (data)=>{
// this.setState({
//   dataOfMyFav: data,
// })
//   }
  ///////////////
  
  //
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? (
                <Main
                addRestaurantToMyFav={this.addRestaurantToMyFav}
                  restaurants={this.state.restaurants}
                  handleSubmit={this.handleSubmit}
                  searchCity={this.state.searchCity}
                />
              ) : (
                <Login />
              )}
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/favorites"></Route>
            <Route exact path="/MyFavorite">
              <MyFavorites  dataOfMyFav={this.state.dataOfMyFav} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
// stateFunctionData={this.stateFunctionData}
export default withAuth0(App);
