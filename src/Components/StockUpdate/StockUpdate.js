
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useGetData from '../useGetData/useGateData';

const StockUpdate = () => {
    const { id } = useParams()
    const [items] = useGetData()
    const singleProduct = items.find(item => item._id === id)

     

    
        const handelDecreaseQuentaty = () => {
            const quantity = (singleProduct?.quantity)-1
            const updateQuantity = {quantity}
            // send data to server
            const url =  `http://localhost:5000/productdecrease/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                
                     
                })

        }
        const handelIncreaseQuentaty = () => {
            const quantity = (singleProduct?.quantity)+1
            const updateQuantity = {quantity}
            // send data to server
            const url =  `http://localhost:5000/productdecrease/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                
                     
                })

        }

        return (

            <div className='row row-cols-1 w-50 my-5 m-auto'>
                <Card className='text-center'>
                    <Card.Img variant="top" src={singleProduct?.img} />
                    <Card.Body>
                        <Card.Title>Name: {singleProduct?.name}</Card.Title>
                        <Card.Text>
                            Price: $ {singleProduct?.price}
                        </Card.Text>
                        <Card.Text>
                            Quantity:  {singleProduct?.quantity}
                        </Card.Text>
                        <Card.Text>
                            suppliyer_name:  {singleProduct?.suppliyer_name}
                        </Card.Text>
                        <Card.Text>
                            <span style={{ color: 'red' }}>Short Description:</span> <small>{singleProduct?.description}</small>
                        </Card.Text>
                        <Button className='mx-5 my-5' variant="primary" onClick={handelDecreaseQuentaty}>Delivery</Button>
                        <Button variant="primary" onClick={handelIncreaseQuentaty}>Re-Stock</Button>
                    </Card.Body>

                </Card>
                <div className='text-center w-25 m-auto my-5 text-decoration-none'><Link to='/manageinventory'>Mange-Inventory</Link></div>
            </div>





        );

    };

    export default StockUpdate;