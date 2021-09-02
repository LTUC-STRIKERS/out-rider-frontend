import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
export class SearchForm extends Component {
    render() {
        return (
            <div>
                <Form className="form" onSubmit={this.props.handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Enter City"
                            name="city"
                        />
                        <Button
                            className="button"
                            variant="primary"
                            type="submit"
                        >
                            Explore!
                        </Button >
                    </Form.Group>
                </Form>

            </div>
        )
    }
}

export default SearchForm
