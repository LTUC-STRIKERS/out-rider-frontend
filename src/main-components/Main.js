import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SearchForm from './SearchForm';
import Restaurants from './Restaurants';

// import Login from './Login';
// import Profile from './Profile';
// import BestBooks from './MyFavorite'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCity: '',
            restaurants: [],
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.setState({
            searchCity: e.target.city.value,
        });
        try {
            let restuarants = await axios.get(`${process.env.REACT_APP_SERVER}/search?location=${this.state.searchCity}`);
            this.setState({
                restaurants: restuarants.data,
            })
        } catch (error) {
            console.log("ERROR")
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth0;

        return (
            <div>
                <SearchForm handleSubmit={this.handleSubmit} />
                <Restaurants restaurants={this.state.restaurants} />
            </div>

        )

}
}
export default withAuth0(Main);
