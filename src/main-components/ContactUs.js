import React, { useState } from "react";
import { Form, Button, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactUs.css"
const ContactUs = () => {
    const [status, setStatus] = useState("Submit");
    const [show, setShow] = useState(false);
    let result;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch(`${process.env.REACT_APP_SERVER}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        result = await response.json();
        setShow(true)
    }
    return (
        <div className='contactus'>
            <div className="text-center">
                <div className="content c-intro container-sm revealable revealed">
                    <h2 ><span>C</span>ONTACT <span>U</span>S</h2>
                    <p >
                        We’d Love to Hear from You!
                        <br />
                        Send us a message and we’ll get back to you as soon as possible.
                        You can also reach us by phone in JO,Amman at +962 789974822 Looking forward to hearing from you.
                    </p>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" required >
                        {/* <Form.Label for="name">Name</Form.Label> */}
                        <Form.Control type="text" id="name" required placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" required >
                        {/* <Form.Label for="email" >Email address</Form.Label> */}
                        <Form.Control type="email" id="email" required placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" required >
                        {/* <Form.Label for="message">Message</Form.Label> */}
                        <Form.Control required id="message" as="textarea" rows={3} placeholder="Wirte Your Message .." />
                    </Form.Group>
                    <Button type="button" className="border border-dark" type="submit">
                        {status}
                    </Button>
                </Form>
            </div>
            <Toast className="alert" show={show} onClose={() => setShow(false)} delay={3000} autohide>
                <Toast.Header>Thank you for getting in touch!</Toast.Header>
                <Toast.Body>We appreciate you contacting us/ OUT RIDER. One of our colleagues will get back in touch with you soon!Have a great day!</Toast.Body>
            </Toast>
        </div>
    );
};
export default ContactUs;