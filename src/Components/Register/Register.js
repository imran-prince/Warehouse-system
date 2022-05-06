import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const formSubmit=(event)=>{
        event.preventDefault()
    }
    return (
        <Form onSubmit={formSubmit} className='w-50 m-auto my-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log-In
            </Button>
            <Link to='/logIn' className='mx-5'>Log-In</Link>
        </Form>
    );
};

export default Register;