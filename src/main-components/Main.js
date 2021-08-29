import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Form, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SearchForm from './SearchForm';
import Restaurants from './Restaurants';

// import Login from './Login';
// import Profile from './Profile';
// import BestBooks from './MyFavorite'


// import {
//     Switch,
//     Route
// } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCity: '',
            restaurants: [],
        };
    }
    //localhost:3004/search?term=food&location=london,
    handleSubmit = async (e) => {
        const { isAuthenticated } = this.props.auth0;
        e.preventDefault();
        await this.setState({
            searchCity: e.target.city.value,
        });
        try {
            let restuarants = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/search?location=${this.state.searchCity}`);
            this.setState({
                restaurants: restuarants.data,
            })
        } catch (error) {
            console.log("ERROR")
        }
    }
    render() {
        return (
            <>
                <SearchForm handleSubmit={this.handleSubmit} />
                <Restaurants restaurants={this.state.restaurants} />
            </>
        );

    }


}

export default withAuth0(Main);

