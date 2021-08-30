import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFavorite from "./MyFavorite";


class MyFavorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          dataOfMyFav: this.props.dataOfMyFav
        };
      }
    
    componentDidMount = async () => {
const axios = require("axios");

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
            dataOfMyFav:dataOfPlace.data,
          })
        // this.props.stateFunctionData( dataOfPlace.data); 
          
        }
        
      };
  render() {
    return (
      <>
        {this.state.dataOfMyFav.map((item, key) => (
           
          <MyFavorite item={item} key={key} />
        ))}
      </>
    );
  }
}

export default withAuth0(MyFavorites);
