import { useEffect, useState } from "react"

const useGetData=()=>{
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allproduct')
        .then(rs=>rs.json())
        .then(data=>setItems(data))

    },[items])
    return [items,setItems]
}
 
export default useGetData