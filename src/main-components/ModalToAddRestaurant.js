import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class ModalToAddRestaurant extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.showAddRestaurant} onHide={this.props.handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Add This Restaurant </Modal.Title>
                </Modal.Header>
                <Modal.Body>

          <Button
          style={{ marginRight:'10px'}}
            onClick={this.props.addRestaurantToMyFav}
   
            type="click"
            variant="success"
          >
            Proceed
          </Button>
          <Button
            onClick={this.props.handleClose}
   
            type="click"
            variant="danger"
          >
            cancel 
          </Button>

                </Modal.Body>
     
            </Modal>
        );
    }
}

export default ModalToAddRestaurant;