import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchForm from './SearchForm';
import Restaurants from './Restaurants';

// import Login from './Login';
// import Profile from './Profile';
// import BestBooks from './MyFavorite'

class Main extends Component {
   

    
    render() {
        

        return (
            <div>
                <SearchForm handleSubmit={this.props.handleSubmit} />
                <Restaurants addRestaurantToMyFav={this.props.addRestaurantToMyFav} restaurants={this.props.restaurants} />
            </div>

        )

}
}
export default Main;
