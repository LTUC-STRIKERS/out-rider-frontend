import React from 'react';
import { Row } from 'react-bootstrap';
import Restaurant from './Restaurant';
import 'bootstrap/dist/css/bootstrap.min.css';

class Restaurants extends React.Component {

   

    render() {
        return (
            <>
                <h2 style={{ margin: "20px auto" }}>Restaurants </h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {this.props.restaurants.map((restaurant, idx) => (
                        <Restaurant gitDataOfFav={this.props.gitDataOfFav} restaurant={restaurant} key={idx} />
                    ))}
                </Row>
            </>
        )
    }
}

export default Restaurants;