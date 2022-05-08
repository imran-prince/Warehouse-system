import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
 

const ManageInventory = () => {
    const [user, loading] =useAuthState(auth)
    const navigate=useNavigate()
     
    const handelNewProduct = event => {
        event.preventDefault()
        const name = event.target.name.value
        const price = parseInt(event.target.price.value)
        const quantity =parseInt( event.target.quantity.value)
        const img = event.target.img.value
        const email=event.target.email.value
        const description=event.target.description.value
        const suppliyer_name=event.target.supliyer_name.value
        const product = { name, price,quantity,img,email ,description,suppliyer_name}
        console.log(product)
     
        // send data to server
        fetch('http://localhost:5000/productadd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('new Product adedsuccessfullay')
                event.target.reset()
                navigate('/manageitems')
            })
    }



    return (
        <div className= 'w-50 m-auto'>
            <h2>Add new Product</h2>
            <form onSubmit={handelNewProduct}>
                <input  className='d-block  w-50'  type="text" name="name" placeholder='product-name' id="" required />
                <br></br>
                <input  className='d-block  w-50' type="text" name="img" placeholder='img link' id="" required />
                <br></br>
                 
                <input className='d-block  w-50' type="number" name="price" placeholder='price' id="" required /><br></br>
                {/* <input className='d-block  w-50' type="text" name="desc" placeholder='decription' id="" required /><br></br> */}
                <input className='d-block  w-50' type="text" name="supliyer_name" placeholder='suplyer_name' id="" required /><br></br>
                <textarea name="description" placeholder='description' id="" cols="30" rows="10"></textarea>
                <input className='d-block  w-50' type="email" name="email" value={user?.email} id="" readOnly disabled/><br></br>
                <input className='d-block  w-50' type="number" name="quantity" id="" placeholder='quantity' required /><br></br>
                <input type="submit"className='d-block  w-50 my-3' value="Add Product" />
            </form>
        </div>
    );


};

export default ManageInventory;