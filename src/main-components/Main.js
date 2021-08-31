import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurants from './Restaurants';

class Main extends Component {
   

    
    render() {
        

        return (
            <div>
                <Restaurants
                  handleClose={this.props.handleClose}
                 addRestaurantToMyFav={this.props.addRestaurantToMyFav}
                showModalToAddRestaurant={this.props.showModalToAddRestaurant} 
                showAddRestaurant = {this.props.showAddRestaurant}
                restaurants={this.props.restaurants} />
            </div>

        )

    }
}
// addRestaurantToMyFav={this.props.addRestaurantToMyFav} 
export default Main;
