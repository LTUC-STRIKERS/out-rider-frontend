import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurants from './Restaurants';

class Main extends Component {
   

    
    render() {
        

        return (
            <div>
                <Restaurants addRestaurantToMyFav={this.props.addRestaurantToMyFav} restaurants={this.props.restaurants} />
            </div>

        )

    }
}

export default Main;
