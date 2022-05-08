import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePageItmem = ({items}) => {
    const {name,img,description,price,quantity,suppliyer_name,_id}=items
  const navigate =useNavigate()
  
   
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
                            Quantity:  {quantity}
                        </Card.Text>
                        <Card.Text>
                        suppliyer_name:  {suppliyer_name}
                        </Card.Text>
                        <Card.Text>
                            <span style={{ color: 'red' }}>Short Description:</span> <small>{description}</small>
                        </Card.Text>
                        <Button onClick={() => { navigate(`/inventory/${_id}`) }} variant="primary">Stock Update</Button>
                    </Card.Body>

                </Card>
            </Col>
             
        </>
    );
};

export default HomePageItmem;