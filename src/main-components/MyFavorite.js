import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col} from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';

class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    favoritePlace:[],
    };
  }

  render() {
    return (
      this.props.dataOfMyFav.map((item ,key ) =>{
        return (
          <Col>
                <Card bg="secondary" text="white" style={{ margin: "30px 5px" }}>
                    <Card.Img src={this.props.dataOfMyFav.image_url} style={{
                        width: '100%',
                        height: '50vh',
                        objectFit: 'cover',
                        maxHeight: '100vh'
                    }} />
                    <Card.Body>
                        <Card.Title>{this.props.dataOfMyFav.name}</Card.Title>
                        {/* <Card.Text>
                  {`${this.props.movie.overview.substring(0,100)}... `}<a style={{color:"white"}} href="#">read more</a>
                </Card.Text> */}
                        <Card.Text variant="primary">
                            Price {this.props.dataOfMyFav.price}
                        </Card.Text>
                        <Card.Text>
                            Rating  {this.props.dataOfMyFav.rating}
                        </Card.Text>
                        <Card.Text>
                            <a className='anchor' href={this.props.dataOfMyFav.url}>Explore {this.props.dataOfMyFav.name}</a>

                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
            <small >Released On  {this.props.movie.released_on}</small>
            </Card.Footer> */}
                </Card>
            </Col>
      )
      }
      )
  )
  }
}
export default withAuth0(MyFavorite);