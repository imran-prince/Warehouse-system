import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
 


const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [
        signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
      const emailHandaler=(e)=>{
          setEmail(e.target.value)
      }
      const passwordHandaler=(e)=>{
          setPassword(e.target.value)
      }
 
    const formSubmit = (event) => {
        event.preventDefault()
        
        signInWithEmailAndPassword(email,password)
         


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
                    <Form.Control type="email" onBlur={emailHandaler} placeholder="Enter email" name='email' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={passwordHandaler} placeholder="Password" name='password' />
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