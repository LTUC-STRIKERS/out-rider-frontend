import React from "react";
import { Row } from "react-bootstrap";
import Restaurant from "./Restaurant";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalToAddRestaurant from "./ModalToAddRestaurant"
class Restaurants extends React.Component {
  
  render() {
    return (
      <>
          <ModalToAddRestaurant
          showAddRestaurant = {this.props.showAddRestaurant}
          addRestaurantToMyFav={this.props.addRestaurantToMyFav}
          handleClose={this.props.handleClose}
          />
        {/* <h2 style={{ margin: "20px auto" ,textAlign: "center"}}>Restaurants </h2> */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {this.props.restaurants.map((restaurant, idx) => (
            <Restaurant
              // addRestaurantToMyFav={this.props.addRestaurantToMyFav}
              showModalToAddRestaurant={this.props.showModalToAddRestaurant} 
              // showAddRestaurant = {this.props.showAddRestaurant}
              restaurant={restaurant}
              key={idx}
            />
          ))}
        </Row>
      </>
    );
  }
}
// addRestaurantToMyFav={this.props.addRestaurantToMyFav}
export default Restaurants;
