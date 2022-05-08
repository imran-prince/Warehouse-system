import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../firebase.init';
 
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading'
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    if (loading) {
        <Loading></Loading>
    }
    const emailHandaler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandaler = (e) => {
        setPassword(e.target.value)
    }

    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const formSubmit = (event) => {
        event.preventDefault()

      if(email && password)
      {
        signInWithEmailAndPassword(email, password)
      }




    }
    const googleSignIn = () => {
        signInWithGoogle()

    }
    const resetPassword = () => {
        if (email) {
            sendPasswordResetEmail(email)
            toast('sent email')
        }
        else{
            toast("please enter your email address")
        }

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
                {
                    user ? <p style={{ color: 'green' }}>Login Successfullay.</p> :
                        <p style={{ color: "red" }}>{error?.message}</p>
                }

                <Button variant="primary" type="submit" className='w-50 m-auto d-block'>
                    Sign-In
                </Button>
                <Link to='/register' className=''>Create New Account</Link>
                <p>Forgot Password ?<button className='btn btn-outline-none text-primary' onClick={resetPassword}>Reset Password</button></p>

            </Form>
            <h2 className='text-center'>------------- Socila log in ----------</h2>
            <button className=' btn   shadow-lg  my-5 w-25 m-auto d-block' onClick={googleSignIn}>Google sign-In  <FcGoogle /></button>
            <ToastContainer/>


        </>
    );
};

export default Login;