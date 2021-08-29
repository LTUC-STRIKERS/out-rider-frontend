import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import BookCard from './components/BookCard';
// import { Row } from 'react-bootstrap';
// import BookFormModal from './components/BookFormModal';


class MyFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      user: this.props.auth0.user,
      show: false,
      change: {
        add: false,
        edit: false
      },
      bookInfo: {}
    }

  }


  render() {
    return (
      <>
        <h1>HELOOOOOOOOOOOOO</h1>


      </>
    )
  }
}

export default withAuth0(MyFavorite);
