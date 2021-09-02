import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row} from 'react-bootstrap';
import axios from 'axios'
import FavRestaurant from './FavRestaurant'
import ModalToDeleteRestaurant from './ModalToDeleteRestaurant'


class FavRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          dataOfMyFav: this.props.dataOfMyFav,
          showDeleteRestaurant:false,
          idOfdeletedFavRestaurant:'',
          favRestaurants:[]
        };
      }

      deleteRestaurant = async (id)=>{
        let restaurants = await axios.delete(`${process.env.REACT_APP_SERVER}/restaurants/${id}?ownerEmail=${this.props.auth0.user.email}`);
        this.setState({
          dataOfMyFav: restaurants.data,
          showDeleteRestaurant:false,
        })

  }    
    
componentDidMount = async () => {
        console.log('fffdddd');
        const { user } = this.props.auth0;
        console.log(this.props.auth0);
        if (user !== undefined) {
          let userEmail = user.email;
          this.setState({
            email: userEmail,
          });
          let dataOfPlace = await axios.get(
            `${process.env.REACT_APP_SERVER}/favoriterestaurents?email=${userEmail}`
          );

          this.setState({
            favRestaurants:dataOfPlace.data,
          })
          
        }
        
      };

      showModalToDeleteRestaurant = (id)=>{
        this.setState({
          showDeleteRestaurant:true,
          idOfdeletedFavRestaurant:id
        })
      }
    
      // handleCloseDeleteModal={this.handleCloseDeleteModal}
      // showModalToDeleteRestaurant={this.showModalToDeleteRestaurant}
      // showDeleteRestaurant={this.state.showDeleteRestaurant}
      // dataOfMyFav={this.state.dataOfMyFav}
      // idOfdeletedFavRestaurant={this.state.idOfdeletedFavRestaurant}
    
      handleCloseDeleteModal =()=>{
        this.setState({
          showDeleteRestaurant:false,
        })
      }
  render() {
    let restaurants = this.state.dataOfMyFav === undefined ? this.state.favRestaurants : this.state.dataOfMyFav

    return (
      <>

              
        <ModalToDeleteRestaurant
        deleteRestaurant={()=>{this.deleteRestaurant(this.state.idOfdeletedFavRestaurant)}}
        showDeleteRestaurant={this.state.showDeleteRestaurant}
        handleCloseDeleteModal={this.handleCloseDeleteModal}
        />
        <h2 style={{ margin: "20px auto",textAlign: "center"}}>My Favorite restaurants </h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {restaurants.map((restaurant, key) => (
           
          <FavRestaurant 
          showModalToDeleteRestaurant={this.showModalToDeleteRestaurant}
          
          restaurant={restaurant} key={key} />
        ))}
        </Row>
      </>
    );
  }
}

export default withAuth0(FavRestaurants);
