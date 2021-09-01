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
                    <Modal.Title>Delete This Restaurant </Modal.Title>
                </Modal.Header>
                <Modal.Body>

          <Button
            onClick={this.props.deleteRestaurant}
   
            type="click"
            variant="secondary"
          >
            Are You Sure
          </Button>

                </Modal.Body>
     
            </Modal>
        );
    }
}

export default ModalToAddRestaurant;