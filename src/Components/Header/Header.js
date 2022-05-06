import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
     const [user, loading] = useAuthState(auth)
    return (
        <Navbar bg="light" expand="lg">
            
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link>
                        {user ? <button className='btn btn-outline-none' onClick={()=>signOut(auth)}>Log-out</button> :<Nav.Link as={CustomLink} to='/logIn'>Log-in</Nav.Link>}
                        
                        <Nav.Link as={CustomLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={CustomLink} to='/items'>Items</Nav.Link>
                        
                       
                        
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;