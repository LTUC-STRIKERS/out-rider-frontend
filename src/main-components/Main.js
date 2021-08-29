import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

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
            searchCity: null
        };
    }

    handleInput = (e) => {
        const { isAuthenticated } = this.props.auth0;
        e.preventDefault();
        this.setState({
            searchCity: e.target.value,
        }, () => console.log(searchCity));
    };

    // getLocation = async (e) => {
    //     e.preventDefault();
    //     let dataRequest = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchCity}&format=json`;
    //     console.log(dataRequest);
    //     try {
    //         let locationData = await axios.get(dataRequest);
    //         this.setState({
    //             cityData: locationData.data[0],
    //             displayData: true,
    //         })

    //     } catch (error) {
    //         console.log("getLocation");
    //         this.setState({
    //             errorMsg: true,
    //             displayData: false,
    //             displayMap: false,
    //             cityData: {},

    //         });
    //     }
    //     this.getMap();
    //     this.forecast();
    //     this.getMovie();

    // };

    render() {

        return (
            <>
                <Form className="form" onSubmit={this.handleInput}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Enter City"
                        />
                        <Button
                            className="button"
                            variant="primary"
                            type="submit"
                        >
                            Explore!
                        </Button>
                    </Form.Group>
                </Form>
                {/* <Card className="card" style={{ width: "18rem" }}>
                    {this.state.displayMap ? <Card.Img src={this.state.imgData} /> : ""}
                    {this.state.displayData ? (
                        <Card.Header>{this.state.cityData.display_name}</Card.Header>
                    ) : (
                        ""
                    )}
                    {this.state.displayData ? (
                        <Card.Body>
                            {" "}
                            Latitude : {this.state.cityData.lat} <br /> Longitude :{" "}
                            {this.state.cityData.lon}{" "}
                        </Card.Body>
                    ) : (
                        ""
                    )}
                </Card>

                {this.state.displayforecast ? <Card>
                    <Card.Header>WEATHER</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.state.forecastData ? <Weather info={this.state.forecastData} /> : ""}
                        </Card.Text>
                    </Card.Body>
                </Card> : ""}


                {this.state.displayMovie ? <Card>
                    <Card.Header>MOVIES</Card.Header>
                    <Card.Body>
                        <Card.Title>Movies here</Card.Title>
                        <Card.Text>
                            {this.state.movieData ? <Movies info={this.state.movieData} /> : ""}
                        </Card.Text>
                    </Card.Body>
                </Card> : ""}

                {this.state.errorMsg ? (
                    <Alert variant="danger" dismissible >
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            Data does not exists.
                        </p>
                    </Alert>
                ) : (
                    ""
                )}
            </>
        );

    } */}
            </>
        )
    }
}
export default withAuth0(Main);

