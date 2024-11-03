import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { jwtDecode } from 'jwt-decode';

function Tests() {
    const [danay, setError] = useState('');
    const token = localStorage.getItem('token');
    const userDetails = jwtDecode(token);
    const roles = userDetails.roles;
    
    const initialData = {
        firstname: "",
        lastname: "",
        Username: "",
        Password: "",
        Email: "",
        Gender: "",
        Role: ""
    };
    const [submite, setsubmite] = useState(initialData);

    const enter = (e) => {
        const { name, value } = e.target;
        setsubmite({ ...submite, [name]: value });
    };

    const handle = async () => {
        try {
            const data = {
                firstName: submite.firstname,
                lastName: submite.lastname,
                username: submite.Username,
                password: submite.Password,
                email: submite.Email,
                gender: submite.Gender,
                role: submite.Role,
            };

            const response = await Axios.post("http://localhost:8080/api/v1/admin/signup", data);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'User registered successfully!',
            });
            setsubmite(initialData); 
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data) {
                setError(error.response.data.message || "An error occurred");
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: danay,
            });
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">Register</h1>
            {danay && <Alert variant="danger">{danay}</Alert>} 
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formFirstname">
                        <Form.Label>Enter your firstname</Form.Label>
                        <Form.Control type="text" name="firstname" value={submite.firstname} onChange={enter} required />
                    </Form.Group>
                    <Form.Group controlId="formLastname">
                        <Form.Label>Enter your lastname</Form.Label>
                        <Form.Control type="text" name="lastname" value={submite.lastname} onChange={enter} required />
                    </Form.Group>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Enter your username</Form.Label>
                        <Form.Control type="text" name="Username" value={submite.Username} onChange={enter} required />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" name="Password" value={submite.Password} onChange={enter} required />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" name="Email" value={submite.Email} onChange={enter} required />
                    </Form.Group>
                    <Form.Group controlId="formGender">
                        <Form.Label>Enter your gender</Form.Label>
                        <Form.Control type="text" name="Gender" value={submite.Gender} onChange={enter} required />
                    </Form.Group>
                    <Form.Group controlId="formRole">
                        <Form.Label>Enter your role</Form.Label>
                        <Form.Control type="text" name="Role" value={submite.Role} onChange={enter} required />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" className="mt-3" onClick={handle}>Register</Button>
        </Container>
    );
}

export default Tests;
