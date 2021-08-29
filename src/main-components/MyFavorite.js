import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import BookCard from './components/BookCard';
// import { Row } from 'react-bootstrap';
// import BookFormModal from './components/BookFormModal';
import { withAuth0 } from "@auth0/auth0-react";
class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    favoritePlace:[],
    };
  }
componentDidMount = async () => {
  const { user } = this.props.auth0;
  console.log(this.props.auth0);
  if (user !== undefined) {
    let userEmail = user.email;
    this.setState({
      email: userEmail,
    });
    let dataOfPlace = await axios.get(
      `${process.env.REACT_APP_SERVER}/favoriteplace?email=${userEmail}`
    );
     this.setState({
      favoritePlace: dataOfPlace.data,
      show: true,
    });
  }
};
  render() {
    return (
      this.state.favoritePlace.map((item ,key ) =>{
        return (
          <div>
        <br />
        <br />
        <Card
          style={{ width: "18rem", display: "inline-block" }}
        >
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.status}</Card.Text>
          </Card.Body>
          <br/>
          <Button
            onClick={()=>{this.props.deletebook(this.props._id)}}
            type="click"
            variant="secondary"
          >Delete</Button>
           <Button
            onClick={()=>{this.props.showModelUpdate(this.props._id)}}
            type="click"
            variant="secondary"
          >Update</Button>
        </Card>
        <br />
        <br />
      </div>
      )
      }
      )
  )
  }
}
export default withAuth0(MyFavorite);