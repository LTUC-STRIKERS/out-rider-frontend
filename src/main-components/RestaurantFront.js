import React from 'react';
import StarRatings from 'react-star-ratings';

class RestaurantFront extends React.Component {
    render() {
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-6'>
                <img src={this.props.restaurant.image_url}   style={{
              width: "100%",
              height: "40vh",
              objectFit: "cover",
              maxHeight: "100vh",
            }} />
              </div>
  
              <div className='col-xs-6 side-front-content'>
                <h2>{this.props.restaurant.name}</h2>
  
                {/* <p> */}
                <StarRatings
          rating={this.props.restaurant.rating}
        //   starEmptyColor="gray"
          starRatedColor='rgb(0,0,0,0.8)'
          starDimension='35px'
        //   changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />  
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default RestaurantFront;