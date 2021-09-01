import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurants from './Restaurants';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
class Main extends Component {
   

    
    render() {
        

        return (
            <div style={{minHeight:'50vh'}}>
                 <Form style={{margin:'30px auto',width:'50%',fontFamily:'Gill Sans',textAlign:'center'}}className="d-flex" onSubmit={this.props.getLocation}>
                <FormControl
                style={{marginLeft:'20%',width:'40%'}}
                  placeholder="Enter City Name"
                  name="cityName"
                  type="search"
                  
                  aria-label="Search"
                />

                <Button style={{ marginLeft: "10px" ,width:'20%',backgroundColor:'#FA5151',color:'white'}}    type="submit">
                  {/* <Redirect  to="/" /> */}
                  Explore!


                </Button>
              </Form>
            <div>
                <Restaurants
                  handleClose={this.props.handleClose}
                 addRestaurantToMyFav={this.props.addRestaurantToMyFav}
                showModalToAddRestaurant={this.props.showModalToAddRestaurant} 
                showAddRestaurant = {this.props.showAddRestaurant}
                restaurants={this.props.restaurants} />
            </div>
</div>
        )

    }
}
// addRestaurantToMyFav={this.props.addRestaurantToMyFav} 
export default Main;
