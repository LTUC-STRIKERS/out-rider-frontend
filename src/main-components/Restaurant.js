import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Card.scss';
import RestaurantBack from './RestaurantBack';
import RestaurantFront from './RestaurantFront';


class Restaurant extends React.Component {

  render() {
    return (

      <div className='card-container'>
        <div className='card-body'>
          <RestaurantBack
          showModalToAddRestaurant={this.props.showModalToAddRestaurant}
          restaurant={this.props.restaurant} />

          <RestaurantFront restaurant={this.props.restaurant} />
        </div>
      </div>

    );
  }
}

export default Restaurant;

