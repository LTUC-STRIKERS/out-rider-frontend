import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class ModalToAddRestaurant extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Modal show={this.props.showDeleteRestaurant} onHide={this.props.handleCloseDeleteModal}>

                <Modal.Header closeButton>
                    <Modal.Title>Delete it from favorites </Modal.Title>
                </Modal.Header>
                <Modal.Body>

          <Button
            onClick={this.props.deleteRestaurant}
   
            type="click"
            variant="danger"
          >
            Delete
          </Button>
          <Button
          style={{marginLeft:'10px'}}
            onClick={this.props.handleCloseDeleteModal}
   
            type="click"
            variant="success"
          >
            cancel 
          </Button>
                </Modal.Body>
     
            </Modal>
        );
    }
}

export default ModalToAddRestaurant;