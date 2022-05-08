import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useGetData from '../useGetData/useGateData';

const AllProduct = ({ item }) => {
    const [items,setItems]=useGetData()
    const { name, img, description, price, quantity, suppliyer_name, _id } = item
    const navigate=useNavigate()
    const deletHadaler=(id)=>{
        const sure=window.confirm('Are you sure want to delet?.');
        if(sure)
        {
           const url=`http://localhost:5000/product/${id}`
           fetch(url,{
               method:"DELETE"


           })
           .then(rs=>rs.json())
           .then(data=>{
               if(data.deletedCount>0)
               {
                   const reamaing= items.filter(u=>u._id!==id)
                    setItems(reamaing)
               }
                
           })
        }
        
    }
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
                        <Button  className='mx-3' variant="primary"> Update</Button>
                        <Button  variant="danger" onClick={()=>deletHadaler(_id)}> Delete</Button>
                    </Card.Body>

                </Card>
            </Col>

        </>
    );
};

export default AllProduct;