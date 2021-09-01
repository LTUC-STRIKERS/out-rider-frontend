import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FavRestaurantBack from './FavRestaurantBack';
import FavRestaurantFront from "./FavRestaurantFront";
class FavRestaurant extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className='card-container'>
        <div className='card-body'>
          <FavRestaurantBack
            showModalToDeleteRestaurant={this.props.showModalToDeleteRestaurant}
            restaurant={this.props.restaurant} />

          <FavRestaurantFront restaurant={this.props.restaurant} />
        </div>
      </div>
    )
  }
}
export default FavRestaurant;
