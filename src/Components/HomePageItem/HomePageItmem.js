import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomePageItmem = ({items}) => {
    const {name,img,description,price}=items
 
 
    return (
        <>
            <Col>
                <Card className='text-center'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            Price: $ {price}
                        </Card.Text>
                        <Card.Text>
                            <span style={{ color: 'red' }}>Short Description:</span> <small>{description}</small>
                        </Card.Text>
                        {/* <Button onClick={() => { navigate(`/checkout/${id}`) }} variant="primary">Check-Out</Button> */}
                    </Card.Body>

                </Card>
            </Col>
             
        </>
    );
};

export default HomePageItmem;