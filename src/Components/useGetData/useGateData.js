import { useEffect, useState } from "react"

const useGetData=()=>{
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://shielded-spire-43449.herokuapp.com/allproduct')
        .then(rs=>rs.json())
        .then(data=>setItems(data))

    },[items])
    return [items,setItems]
}
 
export default useGetData