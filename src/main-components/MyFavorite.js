import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

class MyFavorite extends React.Component {
 

  render() {
    return (
      
      <Col>
      <Card bg="secondary" text="white" style={{ margin: "30px 5px" }}>
        <Card.Img
          src={this.props.item.image_url}
          style={{
            width: "100%",
            height: "50vh",
            objectFit: "cover",
            maxHeight: "100vh",
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.item.name}</Card.Title>

          {/* <Card.Text variant="primary">
            Price {this.props.restaurant.price}
          </Card.Text> */}
          <Card.Text>Rating {this.props.item.rating}</Card.Text>
          <Card.Text>
            <a className="anchor" href={this.props.item.url}>
              Explore {this.props.item.name}
            </a>
          </Card.Text>
          <Card.Text>{this.props.item.review_count}</Card.Text>
          <Card.Text>{this.props.item.phone}</Card.Text>

          </Card.Body>
          </Card>
      </Col>
    
  
    )}
}
export default MyFavorite;
