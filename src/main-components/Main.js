import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurants from './Restaurants';

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Restaurants restaurants={this.props.restaurants} />
        )

    }
}
export default Main;
