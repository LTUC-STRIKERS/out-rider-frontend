import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Restaurant extends React.Component {
  render() {
    return (
      <Col>
        <Card bg="secondary" text="white" style={{ margin: "30px 5px" }}>
          <Card.Img
            src={this.props.restaurant.image_url}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
              maxHeight: "100vh",
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.restaurant.name}</Card.Title>

            <Card.Text variant="primary">
              Price {this.props.restaurant.price}
            </Card.Text>
            <Card.Text>Rating {this.props.restaurant.rating}</Card.Text>
            <Card.Text>
              <a className="anchor" href={this.props.restaurant.url}>
                Explore {this.props.restaurant.name}
              </a>
            </Card.Text>
            <Card.Text>{this.props.restaurant.review_count}</Card.Text>
          </Card.Body>

          <Button
            onClick={() => {
              this.props.addRestaurantToMyFav(
                this.props.restaurant.name,
                this.props.restaurant.rating,
                this.props.restaurant.image_url,
                this.props.restaurant.phone,
                this.props.restaurant.review_count,
                this.props.restaurant.url,
                this.props.restaurant.id,
              );
            }}
            type="click"
            variant="secondary"
          >
            Add To My Favorites
          </Button>
        </Card>
      </Col>
    );
  }
}

export default Restaurant;
