import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const emailHandaler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandaler=e=>{
        setPassword(e.target.value)
    }

    const registerSubmit = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <Form onSubmit={registerSubmit} className='w-50 m-auto my-3'>
            <h2 className='w-50 m-auto'>New Account Create</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"  placeholder="imran" name='name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onBlur={emailHandaler} placeholder="Enter email" name='email' />

            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onBlur={passwordHandaler} placeholder="Password" name='password' />
            </Form.Group>

            <Button variant="primary" type="submit">
                Log-In
            </Button>
            <Link to='/logIn' className='mx-5'>Log-In</Link>
        </Form>
    );
};

export default Register;