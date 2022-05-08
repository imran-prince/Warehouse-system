import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomePageItmem from '../HomePageItem/HomePageItmem';
import useGetData from '../useGetData/useGateData';

const Home = () => {
    const [items]=useGetData()
    // useEffect(()=>{
    //     fetch('https://shielded-spire-43449.herokuapp.com/allproduct')
    //     .then(rs=>rs.json())
    //     .then(data=>setItems(data))

    // },[])
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center my-5 text-warning'>Inventory Items</h2>
            <div className='mx-5 row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-2'>
            {
                items.slice(0,6).map(items=><HomePageItmem items={items} key={items._id}></HomePageItmem>)
            }
            <div className='text-center w-25 m-auto my-5 text-decoration-none'><Link to='/manageinventory'>Mange-Inventory</Link></div>
            </div>
            
           
        </div>
    );
};

export default Home;