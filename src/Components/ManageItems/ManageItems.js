import React from 'react';
import AllProduct from '../AllProduct/AllProduct';
import useGetData from '../useGetData/useGateData';

const ManageItems = () => {
    const [items]=useGetData()
    return (
        <div>
            <h1 className='text-center mt-5'>All Product</h1>
            <div  className='mx-5 row  row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-2'>

          
            {
                items.map(item=><AllProduct key={item._id} item={item}></AllProduct>)
            }
              </div>
            
        </div>
    );
};

export default ManageItems;