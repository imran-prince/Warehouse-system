import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import HomePageItmem from '../HomePageItem/HomePageItmem';

const Home = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(rs=>rs.json())
        .then(data=>setItems(data))

    },[])
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center my-5 text-warning'>Computer Accessories</h2>
            <div className='mx-5 row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-2'>
            {
                items.map(items=><HomePageItmem items={items}></HomePageItmem>)
            }

            </div>
            
           
        </div>
    );
};

export default Home;