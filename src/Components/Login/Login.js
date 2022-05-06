import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const formSubmit = (event) => {
        event.preventDefault()
    }
    const googleSignIn=()=>{
        signInWithGoogle()
        console.log('hellow googlegit ');
    }
    return (
        <>
            <Form onSubmit={formSubmit} className='w-50 m-auto my-3'>
                <h2 className='w-50 m-auto'>Sign In</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log-In
                </Button>
                <Link to='/register' className='mx-5'>New Register</Link>
                
            </Form>
            <button className='btn' onClick={googleSignIn}>Google sign-In  <FcGoogle/></button>
            
            
            </>
    );
};

export default Login;