import React from 'react';
import {Button } from "react-bootstrap";
class RestaurantBack extends React.Component {
    render() {
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            <h1>Let's get in touch!</h1>
            <Button
            onClick={()=>{this.props.showModalToAddRestaurant(this.props.restaurant.id)}}
            type="click"
            variant="secondary"
          >
            Add To My Favorites
          </Button>
   
          </div>
        </div>
      )
    }
  }

  export default RestaurantBack;