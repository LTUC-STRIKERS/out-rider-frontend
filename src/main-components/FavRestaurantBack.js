import React from 'react';
import {Button } from "react-bootstrap";
class FavRestaurantBack extends React.Component {
    render() {
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            {/* <h1>Let's get in touch!</h1> */}
            <h2>{this.props.restaurant.name}</h2>

            <Button
            onClick={()=>{this.props.showModalToDeleteRestaurant(this.props.restaurant._id)}}
            type="click"
            variant="danger"
          >
            Delete This Restaurant
          </Button>
   
          </div>
        </div>
      )
    }
  }

  export default FavRestaurantBack;