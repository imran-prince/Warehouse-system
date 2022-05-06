import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const navigate=useNavigate()
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
    if(loading)
    {
        <Loading></Loading>
    }
    if(user)
    {
        navigate('/')
    }

    const registerSubmit = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email,password)
    }
    return (
        <Form onSubmit={registerSubmit} className='w-50 m-auto my-3 shadow-lg p-5 rounded-5'>
            <h3 className='w-50 m-auto'>Create New Account</h3>
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

            <Button variant="primary" type="submit" className='mx-2'>
                Register
            </Button>
             Already have an Account <Link to='/logIn' className='mx-2'>Log-In</Link>
        </Form>
    );
};

export default Register;