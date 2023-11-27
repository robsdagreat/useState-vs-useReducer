import {useEffect, useState} from 'react'
import axios from 'axios'

const Effect= ()=>{
    const [count, setCount]= useState(0);
    const [data,setData]= useState("");
    useEffect(()=>{
      axios
      .get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
        setData(response.data[0].email);
        console.log("API called successfully");
      })  
    },[])

    return(
        <>
    <h1>{data}</h1>
    <h1>{count}</h1>

    <button
     onClick={()=>{
        setCount(count + 1);
     }}
    >Click</button>   
       
      </>
    )
}

export default Effect