import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocalState } from './hooks/useLocalStorage';
import { jwtDecode } from 'jwt-decode';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import mekekeImage from './Mekelle.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import custom CSS for additional styles

function Login() {
    const [error, setError] = useState('');
    const [valide, setValide] = useState({ username1: '', password1: '' });
    const [myValue, setMyvalue] = useLocalState('', 'myValue');
    const navigate = useNavigate();

    const enter = (e) => {
        const { name, value } = e.target;
        setValide({ ...valide, [name]: value });
        if (error) {
            setError('');
        }
    };

    const check = async (e) => {
        e.preventDefault();
        if (!myValue) {
            try {
                const datas = {
                    username: valide.username1,
                    password: valide.password1,
                };
                const response = await Axios.post("http://localhost:8080/api/v1/auth/signin", datas, { withCredentials: true });
                localStorage.setItem('token', response.data.token);
                const token = localStorage.getItem('token');
                const userDetails = jwtDecode(token);
                const roles = userDetails.roles;
                setMyvalue('authenticated');

                switch (true) {
                    case roles.includes('ADMIN'):
                        navigate('/tests');
                        break;
                    case roles.includes('SYSTEM'):
                        navigate('/postinternship');
                        break;
                    case roles.includes('USER'):
                        navigate('/applyInternship');
                        break;
                    default:
                        navigate('/default');
                        break;
                }
            } catch (error) {
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <Container className="form-container d-flex flex-column align-items-center justify-content-center vh-100">
            <img src={mekekeImage} alt="Logo" className="logo mb-4" />
            <h2 className="text-center">Login</h2>
            <Form onSubmit={check} className="w-75">
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={valide.username1}
                        name="username1"
                        onChange={enter}
                        required
                        minLength="1"
                        maxLength="20"
                        placeholder="Enter your username"
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={valide.password1}
                        name="password1"
                        onChange={enter}
                        required
                        minLength="6"
                        maxLength="15"
                        placeholder="Enter your password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 w-100">
                    Login
                </Button>
                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            </Form>
            <div className="mt-3 text-center">
                <a href="/forgot-password">Forgot your password?</a>
            </div>
        </Container>
    );
}

export default Login;
