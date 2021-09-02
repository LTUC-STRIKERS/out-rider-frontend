import React from "react";
import Header from "../header-components/Header";
import Main from "./Main";
import Footer from "../footer-components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Favorites from "./fav-components/Favorites";
import AboutUs from "./AboutUs";
import './App.css'
import MainCard from "./landing-page/MainCard";
import MainSection from "./landing-page/MainSection";
import LandingPage from "./landing-page/LandingPage";
import Mainheader from "./landing-page/MainHeader";
import Banner from "./landing-page/Banner";
import Bannerfav from "./landing-page/Bannerfav";
import Bannermain from "./landing-page/Bannermain";
import BannerContact from "./landing-page/BannerContact";
import Bannermap from "./landing-page/Bannermap";

import AboutUsCards from "./AboutUsCards";
import FavRestaurants from "./FavRestaurants";
import ContactUs from "./ContactUs";
import { withRouter } from 'react-router-dom';
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
      user: this.props.auth0,
      showAddRestaurant:false,
      favRestaurant:{},
      showDeleteRestaurant:false,
      idOfdeletedFavRestaurant:'',
    };
  }


////////////////////////////
addRestaurantToMyFav = async () => {
  const { user } = this.props.auth0;
  console.log(this.props.auth0);
  if (user !== undefined) {
    let userEmail = user.email;

    let newData = {
      name: this.state.favRestaurant.name,
      rating: this.state.favRestaurant.rating,
      image_url: this.state.favRestaurant.image_url,
      email: userEmail,
      phone: this.state.favRestaurant.phone,
      review_count: this.state.favRestaurant.review_count,
      url: this.state.favRestaurant.url,
      id_res: this.state.favRestaurant.id,
      longitude: this.state.favRestaurant.longitude,
      latitude: this.state.favRestaurant.latitude,
    };
    console.log("dffdgfdgfgf", newData);
    try {
      
    
    let favRestaurants = await axios.post(
      `${process.env.REACT_APP_SERVER}/addrestomyfavorite`,
      newData
    );
    this.setState({
      dataOfMyFav: favRestaurants.data,
      showAddRestaurant:false
    });

  }
  catch (e) {

  }
  }
  console.log("iside addRestaurantToMyFav: ", this.state.dataOfMyFav);
};


  componentDidMount = async () => {
    
            console.log('fffdddd');
            console.log(this.props.auth0);
            if (this.state.user !== undefined) {
              console.log('jj');
              let userEmail = this.state.user.email;
              this.setState({
                email: userEmail,
              });
              let dataOfPlace =  axios.get(
                `${process.env.REACT_APP_SERVER}/favoriterestaurents?email=${userEmail}`
              );
    
             await this.setState({
                dataOfMyFav:dataOfPlace.data,
              })
              console.log('kkkkkkkkkkkkkkkkkkkk',this.state.dataOfMyFav);
            // this.props.stateFunctionData( dataOfPlace.data); 
              
            }
            
          };

  getLocation = async (e) => {
    e.preventDefault();
    // this.props.history.push('/')
    await this.setState({
      cityName: e.target.cityName.value,
    });

   await axios
      .get(
        `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityName}&format=json`
      )
      .then((locationData) => {
        this.setState({
          cityLocation: locationData.data[0],
          status: locationData.status,
          statusText: locationData.statusText,
        });
        console.log('sssssssssssssssssssss', this.state.cityLocation);
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
      console.log(' insid rasturant:', this.state.restaurants);
    } catch (error) {
      console.log('dddd',error);
    }
  };

  showModalToAddRestaurant = (id)=>{
    let restaurant = this.state.restaurants.find(restaurant => restaurant.id=== id);


    this.setState({
      showAddRestaurant:true,
      favRestaurant:restaurant
    })
  }

  handleClose= ()=>{
    this.setState({
      showAddRestaurant:false,
    })
  }

  
  render() {
    return (
      <>
        <Router>
          <Mainheader />

          <Switch>
            <Route exact path="/">
  
              <LandingPage />

            </Route>
         
            <Route exact path="/search">
              <Bannermain />
              <Main
               getLocation={this.getLocation}
                handleClose={this.handleClose}
                showModalToAddRestaurant={this.showModalToAddRestaurant} 
                addRestaurantToMyFav={this.addRestaurantToMyFav}
                showAddRestaurant = {this.state.showAddRestaurant}
                restaurants={this.state.restaurants}
              />

            </Route>

            <Route exact path="/MyFavorite">
              <Bannerfav />
              
              <FavRestaurants 
      
              dataOfMyFav={this.state.dataOfMyFav}
              />
            </Route>
            <Route exact path="/favorites">
              <Bannermap/>
              <Favorites cityData={this.state} />
            </Route>

            <Route exact path="/contactus">
              <BannerContact/>
              <ContactUs/>
            </Route>

            <Route exact path="/aboutus">

              <Banner name='About Us' />
               <AboutUsCards />
            </Route>

       
     

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default withAuth0 (App);
