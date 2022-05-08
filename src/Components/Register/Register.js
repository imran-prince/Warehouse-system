import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setCPass] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const emailHandaler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandaler = e => {
        setPassword(e.target.value)
    }
    const cpasswordHandaler = e => {
        setCPass(e.target.value)
    }
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate('/')
    }


    const registerSubmit = (event) => {
        event.preventDefault()
        if (password !== cpass) {
            toast('Password didnt match')
        }
        else {
            createUserWithEmailAndPassword(email, password)
            toast('sent emial varifaction')
        }
       
    }
    return (
        <>
            <Form onSubmit={registerSubmit} className='w-50 m-auto my-3 shadow-lg p-5 rounded-5'>
                <h3 className='w-50 m-auto'>Create New Account</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="imran" name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={emailHandaler} placeholder="Enter email" name='email' />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={passwordHandaler} placeholder="Password" name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onBlur={cpasswordHandaler} placeholder="Password" name='password' />
                </Form.Group>
                {
                    user ? <p style={{ color: 'green' }}>Account Created Successfullay.</p> :
                        <p style={{ color: "red" }}>{error?.message}</p>
                }

                <Button variant="primary" type="submit" className='mx-2'>
                    Register
                </Button>
                Already have an Account <Link to='/logIn' className='mx-2'>Log-In</Link>
            </Form>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Register;